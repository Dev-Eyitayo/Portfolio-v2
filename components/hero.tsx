import Image from "next/image";
import { ArrowDown, Download, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] items-center px-6 pb-20 pt-28 sm:pt-36"
    >
      <div className="mx-auto grid w-full max-w-5xl items-center gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <p className="text-sm font-semibold text-accent dark:text-accent-glow">
            Software Developer &bull; Ibadan, Nigeria (Remote worldwide)
          </p>

          <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight text-ink dark:text-paper sm:text-5xl lg:text-[3.5rem] lg:leading-[1.12]">
            I build products that help businesses solve problems and grow.
          </h1>

          <p className="mt-5 max-w-xl text-balance text-base leading-relaxed text-slate-600 dark:text-paper/75 sm:text-lg">
            Hi, I&apos;m Ezekiel Eyitayo. I build complete web applications and websites from the ground up by crafting clean, responsive user interfaces backed by reliable backend systems, secure payment flows, and rock-solid APIs.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-800 hover:shadow-md dark:bg-white dark:text-ink dark:hover:bg-slate-100"
            >
              See my work
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-ink transition-all hover:border-accent hover:text-accent dark:border-white/20 dark:bg-transparent dark:text-paper dark:hover:border-accent-glow dark:hover:text-accent-glow"
            >
              Get in touch
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="/Eyitayo Ezekiel Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold text-slate-600 transition-colors hover:text-accent dark:text-paper/70 dark:hover:text-accent-glow"
            >
              Resume
              <Download className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 border-t border-slate-200 pt-6 text-sm text-slate-600 dark:border-white/10 dark:text-paper/70 sm:grid-cols-3">
            <div>
              <p className="font-semibold text-ink dark:text-paper">Frontend &amp; UI</p>
              <p className="mt-0.5 text-xs text-slate-500 dark:text-paper/60">Next.js, React, Tailwind CSS</p>
            </div>
            <div>
              <p className="font-semibold text-ink dark:text-paper">Backend &amp; APIs</p>
              <p className="mt-0.5 text-xs text-slate-500 dark:text-paper/60">Python, FastAPI, Django, Node.js</p>
            </div>
            <div>
              <p className="font-semibold text-ink dark:text-paper">Data &amp; Payments</p>
              <p className="mt-0.5 text-xs text-slate-500 dark:text-paper/60">PostgreSQL, Paystack, Bachs</p>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-md dark:border-white/10 dark:bg-[#121620]">
            <Image
              src="/ezekiel.jpg"
              alt="Portrait of Ezekiel Eyitayo"
              width={420}
              height={420}
              priority
              sizes="(min-width: 1024px) 380px, 90vw"
              className="aspect-square w-full rounded-xl object-cover"
            />
            <div className="mt-3 px-2 pb-1 text-center">
              <p className="font-semibold text-ink dark:text-paper">Ezekiel Eyitayo Feranmi</p>
              <p className="text-xs text-slate-500 dark:text-paper/60">
                Building complete products for clients and companies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
