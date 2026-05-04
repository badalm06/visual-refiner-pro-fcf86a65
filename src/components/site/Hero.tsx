import hero from "@/assets/hero-india.jpg";
import { ArrowRight, MapPin, Search } from "lucide-react";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      <img
        src={hero}
        alt="Taj Mahal at sunrise"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />

      <div className="container-pro w-full pt-28 pb-16 text-white md:pt-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            20+ years crafting journeys
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] text-balance md:text-7xl lg:text-[5.5rem]">
            Discover the soul of <span className="bg-gradient-to-r from-gold to-white bg-clip-text text-transparent">incredible India</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/85 md:text-lg">
            Tailor-made tours, all-inclusive holidays and unforgettable journeys across India,
            Dubai &amp; South Asia — designed by people who know every road.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#packages"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-brand-foreground shadow-card transition-transform hover:-translate-y-0.5"
            >
              Explore packages
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              Plan your trip
            </a>
          </div>
        </div>

        {/* Search bar */}
        <div className="mt-12 max-w-4xl rounded-2xl bg-background/95 p-3 shadow-card backdrop-blur md:mt-16">
          <div className="grid gap-2 md:grid-cols-[1.4fr_1fr_1fr_auto]">
            <label className="flex items-center gap-2 rounded-xl px-4 py-3 text-foreground hover:bg-muted">
              <MapPin className="h-4 w-4 text-brand" />
              <div className="flex-1">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Destination</div>
                <input className="w-full bg-transparent text-sm font-medium outline-none placeholder:text-muted-foreground" placeholder="Where to?" />
              </div>
            </label>
            <label className="flex items-center gap-2 rounded-xl px-4 py-3 text-foreground hover:bg-muted">
              <div className="flex-1">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Travel date</div>
                <input type="date" className="w-full bg-transparent text-sm font-medium outline-none" />
              </div>
            </label>
            <label className="flex items-center gap-2 rounded-xl px-4 py-3 text-foreground hover:bg-muted">
              <div className="flex-1">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Travellers</div>
                <select className="w-full bg-transparent text-sm font-medium outline-none">
                  <option>2 Adults</option>
                  <option>1 Adult</option>
                  <option>Family (4)</option>
                  <option>Group (6+)</option>
                </select>
              </div>
            </label>
            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-brand px-6 py-3 text-sm font-semibold text-brand-foreground transition-transform hover:-translate-y-0.5">
              <Search className="h-4 w-4" /> Search
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-white/70 md:block">
        <div className="mx-auto h-10 w-6 rounded-full border-2 border-white/40 p-1">
          <div className="mx-auto h-2 w-1 animate-bounce rounded-full bg-white/80" />
        </div>
      </div>
    </section>
  );
}
