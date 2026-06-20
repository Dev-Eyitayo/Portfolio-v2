"use client";

import { useRef, useState, useEffect, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Reveal } from "./reveal";
import { siteConfig } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState(""); 

  useEffect(() => {
    if (status === "sent" || status === "error") {
      const timer = setTimeout(() => {
        setStatus("idle");
        setErrorMessage(""); 
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;

    // Strict validation to prevent spaces from bypassing the 'required' attribute
    const formData = new FormData(formRef.current);
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !email || !message) {
      setErrorMessage("Please fill out all fields properly.");
      setStatus("error");
      return;
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("sending");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        setStatus("sent");
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setErrorMessage("Something went wrong. Try emailing me directly.");
        setStatus("error");
      });
  }

  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-28 relative">
      <Reveal>
        <p className="mb-3 text-center font-mono text-xs uppercase tracking-[0.3em] text-rust">
          04 — Contact
        </p>
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Let&apos;s build something.
        </h2>
        <p className="mx-auto mb-12 max-w-md text-center text-sm leading-relaxed text-ink/65 dark:text-paper/65">
          Open to backend, full-stack, and software engineering roles. Reach out directly at{" "}
          <a href={`mailto:${siteConfig.email}`} className="font-medium text-rust hover:underline">
            {siteConfig.email}
          </a>{" "}
          or use the form below.
        </p>
      </Reveal>

      <Reveal delay={100}>
        {/* Removed 'noValidate' here so the browser handles basic empty checks automatically */}
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-ink/50 dark:text-paper/50"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-md border border-ink/15 bg-transparent px-4 py-3 text-sm transition-colors focus:outline-0 focus:border-rust dark:border-paper/15"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-ink/50 dark:text-paper/50"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-md border border-ink/15 bg-transparent px-4 py-3 text-sm transition-colors focus:outline-0 focus:border-rust dark:border-paper/15"
                placeholder="john.doe@example.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-ink/50 dark:text-paper/50"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full rounded-md border border-ink/15 bg-transparent px-4 py-3 text-sm transition-colors focus:outline-0 focus:border-rust dark:border-paper/15"
              placeholder="What are you building?"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-md bg-ink px-6 py-3 text-sm font-medium text-paper transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 dark:bg-paper dark:text-ink"
          >
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
        </form>
      </Reveal>

      {status === "sent" && (
        <div className="fixed top-10 left-1/2 z-50 flex w-max -translate-x-1/2 items-center gap-3 rounded-full border border-ink/10 bg-paper px-6 py-3 text-sm font-medium text-ink shadow-2xl animate-in fade-in zoom-in-95 slide-in-from-top-8 duration-300 ease-out dark:border-paper/10 dark:bg-ink dark:text-paper">
          <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Message sent — I&apos;ll get back to you soon.
        </div>
      )}

      {status === "error" && (
        <div className="fixed top-10 left-1/2 z-50 flex w-max -translate-x-1/2 items-center gap-3 rounded-full border border-ink/10 bg-paper px-6 py-3 text-sm font-medium text-ink shadow-2xl animate-in fade-in zoom-in-95 slide-in-from-top-8 duration-300 ease-out dark:border-paper/10 dark:bg-ink dark:text-paper">
          <svg className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          {errorMessage || "Something went wrong. Try emailing me directly."}
        </div>
      )}
    </section>
  );
}