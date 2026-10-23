import { about, skills } from "@/lib/data";

const skillSections = [
  { title: "Frontend development", items: skills.frontend },
  { title: "Backend development & databases", items: skills.backend },
  { title: "Integrations & production tools", items: skills.integrations },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-accent dark:text-accent-glow">
          About me
        </span>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink dark:text-paper sm:text-4xl">
          Building software that is practical, fast, and made to last.
        </h2>
      </div>

      <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="space-y-5 text-base leading-relaxed text-slate-700 dark:text-slate-200 lg:col-span-7">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <div className="space-y-6 lg:col-span-5">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#121620]">
            <h3 className="text-base font-bold text-ink dark:text-paper">What I bring to your project</h3>
            <div className="mt-5 space-y-6">
              {skillSections.map((group) => (
                <div key={group.title}>
                  <h4 className="text-xs font-semibold text-slate-500 dark:text-paper/60">
                    {group.title}
                  </h4>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-paper/85"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
