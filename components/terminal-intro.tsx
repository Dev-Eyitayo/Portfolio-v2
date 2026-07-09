"use client";

import { useEffect, useState } from "react";

const LINES = [
  { prompt: "~/eyitayo", command: "whoami", output: "software engineer" },
  { prompt: "~/eyitayo", command: "ls ./capabilities", output: "apis · scalable systems · databases · cloud" },
];

export function TerminalIntro({ className = "" }: { className?: string }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);
  const prefersReduced =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (prefersReduced) {
      setDone(true);
      return;
    }
    if (lineIndex >= LINES.length) {
      setDone(true);
      return;
    }

    const currentCommand = LINES[lineIndex].command;
    if (charIndex < currentCommand.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 45);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setLineIndex((l) => l + 1);
      setCharIndex(0);
    }, 450);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charIndex, lineIndex]);

  return (
    <div
      className={`thin-scrollbar overflow-x-auto rounded-lg border border-ink/10 bg-ink text-left font-mono text-xs shadow-2xl shadow-ink/20 dark:border-paper/10 dark:shadow-black/40 sm:text-sm ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-paper/10 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-rust/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-paper/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-paper/30" />
        <span className="ml-3 text-xs text-paper/40">session — bash</span>
      </div>
      <div className="space-y-2 px-4 py-4 text-paper">
        {LINES.map((line, i) => {
          if (i > lineIndex) return null;
          const isCurrent = i === lineIndex && !done;
          const text = isCurrent ? line.command.slice(0, charIndex) : line.command;
          return (
            <div key={line.command}>
              <div className="flex gap-2">
                <span className="text-rust">{line.prompt} $</span>
                <span className="whitespace-nowrap">
                  {text}
                  {isCurrent && <span className="ml-0.5 animate-blink">▋</span>}
                </span>
              </div>
              {line.output && (i < lineIndex || done) && (
                <div className="whitespace-nowrap pl-1 text-paper/70">{line.output}</div>
              )}
            </div>
          );
        })}
        {done && (
          <div className="flex gap-2">
            <span className="text-rust">~/eyitayo $</span>
            <span className="animate-blink">▋</span>
          </div>
        )}
      </div>
    </div>
  );
}