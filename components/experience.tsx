import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-accent dark:text-accent-glow">
          Experience
        </span>
        <h2 className="mt-2 mb-16 text-3xl font-bold tracking-tight text-ink dark:text-paper sm:text-4xl">
          Where I&apos;ve built and collaborated.
        </h2>
      </div>

      <ol className="relative space-y-14">
        <div
          className="absolute left-[7px] top-2 hidden h-[calc(100%-2rem)] w-px bg-slate-200 dark:bg-white/10 sm:block"
          aria-hidden="true"
        />

        {experience.map((entry) => (
          <li key={entry.company} className="relative sm:pl-12">
            <span
              className={`absolute left-0 top-1.5 hidden h-3.5 w-3.5 rounded-full border-2 sm:block ${
                entry.current
                  ? "border-accent bg-accent"
                  : "border-slate-300 bg-white dark:border-white/20 dark:bg-[#0A0D14]"
              }`}
              aria-hidden="true"
            />

            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-xl font-bold tracking-tight text-ink dark:text-paper">{entry.role}</h3>
              <span className="text-xs font-medium text-slate-500 dark:text-paper/50">
                {entry.period}
              </span>
            </div>

            <div className="mb-2 mt-1 flex flex-wrap items-center gap-2">
              <p className="font-semibold text-accent dark:text-accent-glow">{entry.company}</p>
              {entry.location && (
                <span className="rounded-full border border-slate-300 bg-slate-100 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.12em] text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-paper/60">
                  {entry.location}
                </span>
              )}
              {entry.current && (
                <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent dark:text-accent-glow">
                  Current
                </span>
              )}
            </div>

            <p className="mb-4 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-paper/75">
              {entry.summary}
            </p>

            <ul className="space-y-2">
              {entry.highlights.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-sm leading-relaxed text-slate-600 dark:text-paper/70"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70 dark:bg-accent-glow" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
