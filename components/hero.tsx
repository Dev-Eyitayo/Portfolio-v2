import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { TerminalIntro } from "./terminal-intro";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden px-6 pb-24 pt-28 sm:pt-32"
    >
      <div
        className="absolute inset-0 bg-grid-light bg-grid dark:bg-grid-dark [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-5xl items-center gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <p className="flex animate-fade-up items-center gap-2.5 font-mono text-xs uppercase tracking-[0.3em] text-rust opacity-0">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rust opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-rust" />
            </span>
            Available for backend &amp; full-stack roles
          </p>

          <h1
            className="mt-6 animate-fade-up text-balance text-4xl font-bold leading-[1.08] tracking-tight opacity-0 sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "100ms" }}
          >
            Ezekiel Eyitayo
            <br />
            <span className="text-ink/40 dark:text-paper/40">builds systems that hold up.</span>
          </h1>

          <p
            className="mt-6 max-w-xl animate-fade-up text-balance text-base leading-relaxed text-ink/70 opacity-0 dark:text-paper/70 sm:text-lg"
            style={{ animationDelay: "200ms" }}
          >
            I design and build systems focused on reliability, scale, and real-world usage
            — from payment flows and integrations to the core infrastructure behind production
            applications.
          </p>

          <div
            className="mt-9 flex animate-fade-up flex-wrap items-center gap-3 opacity-0"
            style={{ animationDelay: "300ms" }}
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-ink px-6 py-3 text-sm font-medium text-paper transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink/10 dark:bg-paper dark:text-ink dark:hover:shadow-paper/10"
            >
              View projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/Ezekiel Eyitayo resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-ink/15 px-6 py-3 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-rust hover:text-rust dark:border-paper/15"
            >
              Resume
              <Download className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div
          className="relative mx-auto w-full max-w-md animate-fade-up opacity-0 lg:col-span-5 lg:max-w-none"
          style={{ animationDelay: "250ms" }}
        >
          <div
            className="absolute -right-10 -top-12 h-64 w-64 rounded-full bg-rust/10 blur-3xl dark:bg-rust/15"
            aria-hidden="true"
          />

          <figure className="relative ml-auto w-[76%] max-w-[19rem] sm:max-w-[21rem]">
            <div
              className="absolute -right-3.5 -top-3.5 h-full w-full rounded-xl border border-rust/40"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-xl border border-ink/10 bg-paper-soft shadow-2xl shadow-ink/10 dark:border-paper/15 dark:bg-ink-soft dark:shadow-black/40">
              <div className="flex items-center gap-1.5 border-b border-ink/10 px-4 py-2.5 dark:border-paper/10">
                <span className="h-2.5 w-2.5 rounded-full bg-rust/70" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-ink/20 dark:bg-paper/30" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-ink/20 dark:bg-paper/30" aria-hidden="true" />
                <span className="ml-3 font-mono text-[11px] text-ink/50 dark:text-paper/40">
                  Eyitayo
                </span>
              </div>
              <Image
                src="/ezekiel.jpg"
                alt="Portrait of Ezekiel Eyitayo"
                width={400}
                height={400}
                priority
                sizes="(min-width: 640px) 336px, 70vw"
                className="aspect-square w-full object-cover"
              />
            </div>
            <figcaption className="sr-only">Ezekiel Eyitayo, backend software engineer</figcaption>
          </figure>

          <div className="relative z-10 -mt-14 w-[88%] max-w-[24rem] sm:-mt-20 lg:-ml-6">
            <TerminalIntro className="w-full" />
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="group absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/40 transition-colors group-hover:text-rust dark:text-paper/40">
          scroll
        </span>
        <span className="h-10 w-px overflow-hidden bg-ink/10 dark:bg-paper/10" aria-hidden="true">
          <span className="block h-full w-full animate-[scan-line_2.2s_ease-in-out_infinite] bg-rust" />
        </span>
      </a>
    </section>
  );
}