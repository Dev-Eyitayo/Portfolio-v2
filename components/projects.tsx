import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-accent dark:text-accent-glow">
          Portfolio
        </span>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink dark:text-paper sm:text-4xl">
          Featured projects.
        </h2>
        <p className="mt-3 max-w-2xl text-base text-slate-600 dark:text-paper/70">
          A selection of web applications, commercial platforms, and tools I&apos;ve built and shipped. Every project represents real users, real data, and clean execution.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100/50 p-[1.5px] transition-all duration-300 hover:border-slate-300 hover:shadow-md hover:shadow-slate-900/5 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 dark:hover:shadow-none"
          >
            {/* Emerald animated beam running through border edges on hover */}
            <div
              className="pointer-events-none absolute -inset-[150%] opacity-0 transition-opacity duration-500 group-hover:opacity-100 animate-border-run"
              style={{
                background:
                  "conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 290deg, #059669 335deg, #34D399 360deg)",
              }}
              aria-hidden="true"
            />

            {/* Inner card surface */}
            <div className="relative flex h-full w-full flex-col justify-between rounded-[15px] bg-white p-6 dark:bg-[#121620] sm:p-7">
              <div>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold text-ink dark:text-paper transition-colors group-hover:text-accent dark:group-hover:text-accent-glow">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    {project.code && (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} source code on GitHub`}
                        className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-ink dark:text-paper/50 dark:hover:bg-white/5 dark:hover:text-paper"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open live website for ${project.title}`}
                        className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-accent dark:text-paper/50 dark:hover:bg-white/5 dark:hover:text-accent-glow"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-paper/75">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 dark:border-white/5">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 border border-slate-200/60 dark:border-white/5 dark:bg-white/5 dark:text-paper/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex gap-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline dark:text-accent-glow"
                    >
                      Visit live website
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-ink dark:text-paper/60 dark:hover:text-paper"
                    >
                      View code
                      <Github className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
