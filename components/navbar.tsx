"use client";

import { useEffect, useState, useRef } from "react";
import { Menu, X, Download } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const headerRef = useRef<HTMLElement>(null);

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
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Close when clicking outside or pressing Escape
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-2xl"
    >
      <nav
        className="flex items-center justify-between rounded-full border border-slate-200/90 bg-white/85 px-4 py-2 shadow-lg shadow-slate-900/5 backdrop-blur-md transition-all duration-300 dark:border-white/10 dark:bg-[#0A0D14]/85 dark:shadow-black/40 sm:px-5"
        aria-label="Primary"
      >
        <a
          href="#home"
          className="font-bold tracking-tight text-ink dark:text-paper text-sm sm:text-base hover:text-accent dark:hover:text-accent-glow transition-colors"
          aria-label="Ezekiel Eyitayo - Home"
        >
          {siteConfig.shortName}
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition-all duration-200 ${
                active === link.href
                  ? "bg-slate-100 text-accent dark:bg-white/10 dark:text-accent-glow"
                  : "text-slate-600 hover:bg-slate-50 hover:text-ink dark:text-paper/70 dark:hover:bg-white/5 dark:hover:text-paper"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="relative flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-ink transition-all hover:bg-slate-100 dark:border-white/10 dark:text-paper dark:hover:bg-white/5 md:hidden"
          >
            <span
              className={`absolute transition-all duration-300 transform ${
                open ? "rotate-90 opacity-100 scale-100" : "-rotate-90 opacity-0 scale-75"
              }`}
            >
              <X className="h-4 w-4" />
            </span>
            <span
              className={`absolute transition-all duration-300 transform ${
                open ? "rotate-90 opacity-0 scale-75" : "rotate-0 opacity-100 scale-100"
              }`}
            >
              <Menu className="h-4 w-4" />
            </span>
          </button>
        </div>
      </nav>

      {/* Animated Dropdown Drawer */}
      <div
        className={`mt-2 overflow-hidden rounded-2xl border bg-white/95 shadow-xl backdrop-blur-xl transition-all duration-300 origin-top ease-[cubic-bezier(0.16,1,0.3,1)] dark:bg-[#0F141C]/95 dark:shadow-black/60 md:hidden ${
          open
            ? "max-h-96 opacity-100 scale-100 translate-y-0 border-slate-200/90 dark:border-white/10 p-2.5"
            : "max-h-0 opacity-0 scale-95 -translate-y-2 pointer-events-none border-transparent p-0"
        }`}
      >
        <div className="flex flex-col gap-1">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                transitionDelay: open ? `${(i + 1) * 35}ms` : "0ms",
              }}
              className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 ease-out ${
                open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"
              } ${
                active === link.href
                  ? "bg-emerald-50 text-accent font-semibold dark:bg-emerald-500/10 dark:text-accent-glow"
                  : "text-slate-700 hover:bg-slate-100/70 dark:text-paper/80 dark:hover:bg-white/5"
              }`}
            >
              <span>{link.label}</span>
              {active === link.href && (
                <span className="h-1.5 w-1.5 rounded-full bg-accent dark:bg-accent-glow" />
              )}
            </a>
          ))}

          <div className="mt-1 pt-2 border-t border-slate-100 dark:border-white/5">
            <a
              href="/Eyitayo Ezekiel Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              style={{
                transitionDelay: open ? `${(navLinks.length + 1) * 35}ms` : "0ms",
              }}
              className={`flex items-center justify-between rounded-xl px-4 py-2 text-xs font-semibold text-slate-500 hover:text-accent dark:text-paper/60 dark:hover:text-accent-glow transition-all duration-300 ${
                open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"
              }`}
            >
              <span>Resume (PDF)</span>
              <Download className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
