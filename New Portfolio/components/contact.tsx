"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "./reveal";
import { siteConfig } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-28">
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
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              id="name"
              label="Name"
              type="text"
              value={form.name}
              onChange={(v) => setForm((f) => ({ ...f, name: v }))}
            />
            <Field
              id="email"
              label="Email"
              type="email"
              value={form.email}
              onChange={(v) => setForm((f) => ({ ...f, email: v }))}
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-ink/50 dark:text-paper/50">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              className="w-full rounded-md border border-ink/15 bg-transparent px-4 py-3 text-sm transition-colors focus:border-rust dark:border-paper/15"
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

          {status === "sent" && (
            <p className="text-center text-sm text-rust" role="status">
              Message sent — I&apos;ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-sm text-red-500" role="alert">
              Something went wrong. Try emailing me directly instead.
            </p>
          )}
        </form>
      </Reveal>
    </section>
  );
}

function Field({
  id,
  label,
  type,
  value,
  onChange,
}: {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-ink/50 dark:text-paper/50">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-ink/15 bg-transparent px-4 py-3 text-sm transition-colors focus:border-rust dark:border-paper/15"
        placeholder={type === "email" ? "you@example.com" : "Jane Doe"}
      />
    </div>
  );
}
