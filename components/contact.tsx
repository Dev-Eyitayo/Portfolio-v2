"use client";

import { useRef, useState, useEffect, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Mail, CheckCircle2, AlertCircle } from "lucide-react";
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
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !email || !message) {
      setErrorMessage("Please fill out all fields.");
      setStatus("error");
      return;
    }

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
        setErrorMessage("Something went wrong. Please email me directly instead.");
        setStatus("error");
      });
  }

  return (
    <section id="contact" className="relative mx-auto max-w-3xl px-6 py-24 sm:py-28">
      <div className="text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-accent dark:text-accent-glow">
          Contact
        </span>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink dark:text-paper sm:text-4xl">
          Let&apos;s talk about your next project.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-slate-600 dark:text-paper/75">
          Whether you need a complete website built from the ground up, a reliable payment flow integrated, or an experienced engineer to join your team—let&apos;s build something great together.
        </p>
        <div className="mt-4 flex items-center justify-center gap-2">
          <Mail className="h-4 w-4 text-accent dark:text-accent-glow" />
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-sm font-semibold text-accent hover:underline dark:text-accent-glow"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#121620] sm:p-8"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-xs font-semibold text-slate-700 dark:text-paper/70"
            >
              Your name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-ink transition-colors focus:border-accent focus:bg-white focus:outline-none dark:border-white/15 dark:bg-white/5 dark:text-paper dark:focus:border-accent-glow dark:focus:bg-[#121620]"
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-xs font-semibold text-slate-700 dark:text-paper/70"
            >
              Your email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-ink transition-colors focus:border-accent focus:bg-white focus:outline-none dark:border-white/15 dark:bg-white/5 dark:text-paper dark:focus:border-accent-glow dark:focus:bg-[#121620]"
              placeholder="jane@example.com"
            />
          </div>
        </div>

        <div className="mt-5">
          <label
            htmlFor="message"
            className="mb-2 block text-xs font-semibold text-slate-700 dark:text-paper/70"
          >
            How can I help you?
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-ink transition-colors focus:border-accent focus:bg-white focus:outline-none dark:border-white/15 dark:bg-white/5 dark:text-paper dark:focus:border-accent-glow dark:focus:bg-[#121620]"
            placeholder="Tell me about what you're building, your timeline, or the role you have in mind..."
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="mt-6 w-full rounded-lg bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-slate-800 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-ink dark:hover:bg-slate-100"
        >
          {status === "sending" ? "Sending message…" : "Send message"}
        </button>
      </form>

      {status === "sent" && (
        <div className="fixed top-8 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2.5 rounded-full border border-emerald-500/20 bg-white px-6 py-3 text-sm font-medium text-emerald-800 shadow-xl dark:bg-[#121620] dark:text-emerald-300">
          <CheckCircle2 className="h-5 w-5 text-emerald-500" />
          Thank you! Message received—I&apos;ll get back to you shortly.
        </div>
      )}

      {status === "error" && (
        <div className="fixed top-8 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2.5 rounded-full border border-rose-500/20 bg-white px-6 py-3 text-sm font-medium text-rose-800 shadow-xl dark:bg-[#121620] dark:text-rose-300">
          <AlertCircle className="h-5 w-5 text-rose-500" />
          {errorMessage || "Something went wrong. Please email me directly."}
        </div>
      )}
    </section>
  );
}
