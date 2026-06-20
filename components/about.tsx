import { Reveal } from "./reveal";
import { about, skills } from "@/lib/data";

const skillGroups = [
  { label: "Backend", items: skills.backend },
  { label: "Frontend", items: skills.frontend },
  { label: "Practices", items: skills.practices },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-28">
      <Reveal>
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-rust">01 — About</p>
        <h2 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
          Engineering things that don&apos;t break under real load.
        </h2>
      </Reveal>

      <div className="grid gap-12 md:grid-cols-5">
        <Reveal className="md:col-span-3" delay={80}>
          <div className="space-y-5 text-base leading-relaxed text-ink/75 dark:text-paper/75">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal className="md:col-span-2" delay={160}>
          <div className="space-y-6">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-ink/50 dark:text-paper/50">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-ink/10 px-3 py-1.5 text-xs font-medium text-ink/80 transition-colors hover:border-rust/50 hover:text-rust dark:border-paper/10 dark:text-paper/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
