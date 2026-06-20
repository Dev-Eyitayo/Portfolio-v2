import { ArrowRight, Download } from "lucide-react";
import { TerminalIntro } from "./terminal-intro";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-6 pt-24"
    >
      <div
        className="absolute inset-0 bg-grid-light bg-grid dark:bg-grid-dark [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-rust">
          Available for backend &amp; full-stack roles
        </p>

        <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
          Ezekiel Eyitayo
          <br />
          <span className="text-ink/40 dark:text-paper/40">builds backends that hold up.</span>
        </h1>

        <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-ink/70 dark:text-paper/70 sm:text-lg">
          I design and build backend systems focused on reliability, scale, and real-world usage — from payment flows and integrations to the core infrastructure behind production applications.
        </p>

        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-md bg-ink px-6 py-3 text-sm font-medium text-paper transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink/10 dark:bg-paper dark:text-ink dark:hover:shadow-paper/10"
          >
            View projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-ink/15 px-6 py-3 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-rust hover:text-rust dark:border-paper/15"
          >
            Resume
            <Download className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="relative z-10 mt-14 w-full px-2 sm:mt-16">
        <TerminalIntro />
      </div>
    </section>
  );
}
