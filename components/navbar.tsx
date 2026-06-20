"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-ink/10 dark:border-paper/10 bg-paper/80 dark:bg-ink/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6" aria-label="Primary">
        <a
          href="#home"
          className="flex items-center gap-1.5 font-mono text-sm font-medium tracking-tight"
          aria-label="Go to top"
        >
          <span className="text-rust">$</span>
          <span>whoami</span>
          <span className="text-ink/40 dark:text-paper/40">— {siteConfig.shortName.toLowerCase()}</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative font-mono text-xs uppercase tracking-widest transition-colors ${
                active === link.href
                  ? "text-rust"
                  : "text-ink/60 hover:text-ink dark:text-paper/60 dark:hover:text-paper"
              }`}
            >
              {link.label}
              {active === link.href && (
                <span className="absolute -bottom-2 left-0 h-px w-full bg-rust" aria-hidden="true" />
              )}
            </a>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-ink/10 dark:border-paper/10"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden overflow-hidden border-b border-ink/10 bg-paper/95 backdrop-blur-md transition-[max-height,opacity] duration-300 dark:border-paper/10 dark:bg-ink/95 ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-3 font-mono text-sm uppercase tracking-widest text-ink/70 transition-colors hover:bg-ink/5 hover:text-ink dark:text-paper/70 dark:hover:bg-paper/5 dark:hover:text-paper"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
