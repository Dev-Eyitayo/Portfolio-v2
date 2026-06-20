import { ArrowUpRight, Github } from "lucide-react";
import { Reveal } from "./reveal";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-28">
      <Reveal>
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-rust">03 — Projects</p>
        <h2 className="mb-16 text-3xl font-bold tracking-tight sm:text-4xl">Things I&apos;ve shipped.</h2>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2">
        {projects
          .filter((project) => project.featured)
          .map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 80}>
              <article
                className={`group flex h-full flex-col rounded-xl border border-ink/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-rust/40 hover:shadow-xl hover:shadow-ink/5 dark:border-paper/10 dark:hover:shadow-black/30 ${
                  project.featured ? "sm:col-span-2" : ""
                }`}
              >
                <h3 className="mb-2 text-lg font-semibold tracking-tight transition-colors group-hover:text-rust">
                  {project.title}
                </h3>

                <p className="mb-5 flex-1 text-sm leading-relaxed text-ink/65 dark:text-paper/65">
                  {project.description}
                </p>

                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-ink/5 px-2.5 py-1 font-mono text-[11px] text-ink/60 dark:bg-paper/5 dark:text-paper/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-ink/15 px-3 py-1.5 text-xs font-medium transition-colors hover:border-rust hover:text-rust dark:border-paper/15"
                    >
                      <Github className="h-3.5 w-3.5" />
                      Code
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md bg-ink px-3 py-1.5 text-xs font-medium text-paper transition-colors hover:bg-rust dark:bg-paper dark:text-ink dark:hover:bg-rust dark:hover:text-paper"
                    >
                      Live
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
      </div>
    </section>
  );
}
