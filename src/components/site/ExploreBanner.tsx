import banner from "@/assets/explore-banner-flute.avif";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function ExploreBanner() {
  return (
    <section className="relative isolate overflow-hidden" aria-labelledby="explore-braj-heading">
      <img
        src={banner}
        alt="Krishna's flute with peacock feather — Braj Miles spiritual tours"
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-dark/85 via-brand-dark/60 to-brand-dark/30" />

      <div className="container-pro py-24 md:py-32">
        <Reveal className="max-w-2xl text-white">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Braj Miles — Your Spiritual Travel Partner
          </span>
          <h2
            id="explore-braj-heading"
            className="mt-3 font-display text-4xl font-bold text-balance md:text-6xl"
          >
            Explore Braj Dham
          </h2>
          <p className="mt-5 text-white/85 leading-relaxed">
            From the divine ghats of <strong className="text-gold">Vrindavan</strong> to the
            sacred parikrama of <strong className="text-gold">Govardhan</strong>, from the
            joyful lanes of <strong className="text-gold">Barsana</strong> to the childhood
            home of Krishna in <strong className="text-gold">Gokul</strong> — Braj Miles
            crafts spiritual journeys that match your devotion, comfort and budget. With 20+
            years of experience, our expert travel designers create personalised Braj Yatra
            packages for families, senior citizens, and solo pilgrims.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/919027674560"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand shadow-card transition-transform hover:-translate-y-0.5"
            >
              Start planning <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/#packages"
              className="inline-flex items-center gap-2 rounded-full border border-white/50 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              View packages
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-2" aria-label="Popular Braj Miles tour destinations">
            {[
              "Vrindavan Tour",
              "Govardhan Parikrama",
              "Mathura Darshan",
              "Barsana Holi",
              "Gokul Yatra",
              "Nandgaon Trip",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
