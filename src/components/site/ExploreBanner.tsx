import banner from "@/assets/banner-andaman.jpg";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function ExploreBanner() {
  return (
    <section className="relative isolate overflow-hidden">
      <img src={banner} alt="Andaman beach" loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-dark/85 via-brand-dark/60 to-brand-dark/30" />

      <div className="container-pro py-24 md:py-32">
        <Reveal className="max-w-2xl text-white">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Explore India</span>
          <h2 className="mt-3 font-display text-4xl font-bold text-balance md:text-6xl">
            Explore India &amp; international destinations with us
          </h2>
          <p className="mt-5 text-white/85">
            From the Himalayas to the backwaters and beyond — we craft journeys that match
            your pace, taste and budget. Talk to our travel designers today.
          </p>
          <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand shadow-card transition-transform hover:-translate-y-0.5">
            Start planning <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
