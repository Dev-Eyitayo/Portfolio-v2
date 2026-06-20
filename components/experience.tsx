import { Reveal } from "./reveal";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-28">
      <Reveal>
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-rust">02 — Experience</p>
        <h2 className="mb-16 text-3xl font-bold tracking-tight sm:text-4xl">Career history.</h2>
      </Reveal>

      <ol className="relative space-y-14">
        <div
          className="absolute left-[7px] top-2 hidden h-[calc(100%-2rem)] w-px bg-ink/10 dark:bg-paper/10 sm:block"
          aria-hidden="true"
        />

        {experience.map((entry, i) => (
          <Reveal key={entry.company} delay={i * 100}>
            <li className="relative sm:pl-12">
              <span
                className={`absolute left-0 top-1.5 hidden h-3.5 w-3.5 rounded-full border-2 sm:block ${
                  entry.current
                    ? "border-rust bg-rust"
                    : "border-ink/30 bg-paper dark:border-paper/30 dark:bg-ink"
                }`}
                aria-hidden="true"
              />

              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-xl font-semibold tracking-tight">{entry.role}</h3>
                <span className="font-mono text-xs uppercase tracking-widest text-ink/40 dark:text-paper/40">
                  {entry.period}
                </span>
              </div>
              <div className="mb-4 flex items-center gap-2">
                <p className="font-medium text-rust">{entry.company}</p>
                {entry.current && (
                  <span className="rounded-full bg-rust/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-rust">
                    Current
                  </span>
                )}
              </div>

              <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70 dark:text-paper/70">
                {entry.summary}
              </p>

              <ul className="space-y-2">
                {entry.highlights.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-ink/65 dark:text-paper/65"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-rust/60" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
