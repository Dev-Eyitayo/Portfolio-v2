import { Github, Linkedin } from "lucide-react";
import { siteConfig } from "@/lib/data";

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 px-6 py-10 dark:border-white/10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-5 sm:flex-row">
        <p className="text-xs text-slate-500 dark:text-paper/60">
          © {year} {siteConfig.name}. Built with care and intention.
        </p>

        <div className="flex items-center gap-5">
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-500 transition-colors hover:text-accent dark:text-paper/60 dark:hover:text-accent-glow"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-500 transition-colors hover:text-accent dark:text-paper/60 dark:hover:text-accent-glow"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={siteConfig.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="text-slate-500 transition-colors hover:text-accent dark:text-paper/60 dark:hover:text-accent-glow"
          >
            <XIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
