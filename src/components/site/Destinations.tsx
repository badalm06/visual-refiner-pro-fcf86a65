import dubai from "@/assets/dest-dubai.jpg";
import thailand from "@/assets/dest-thailand.jpg";
import kerala from "@/assets/dest-kerala.jpg";
import ladakh from "@/assets/dest-ladakh.jpg";
import goa from "@/assets/dest-goa.jpg";
import { Reveal } from "./Reveal";

const TOP = [
  { img: dubai, name: "Dubai", trips: "12 tours" },
  { img: thailand, name: "Thailand", trips: "9 tours" },
  { img: kerala, name: "Sri Lanka", trips: "6 tours" },
  { img: ladakh, name: "Singapore", trips: "8 tours" },
  { img: goa, name: "Malaysia", trips: "7 tours" },
];

export function Destinations() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-pro">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">Explore the world</span>
          <h2 className="mt-3 text-4xl font-bold text-foreground md:text-5xl">Top destinations</h2>
          <p className="mt-4 text-muted-foreground">Beyond India — curated international getaways.</p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {TOP.map((d, i) => (
            <Reveal key={d.name} delay={i * 60}>
              <a href="#" className="img-zoom group relative block aspect-[3/4] overflow-hidden rounded-2xl shadow-soft">
                <img src={d.img} alt={d.name} loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute inset-0" style={{ background: "var(--gradient-overlay)" }} />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <div className="font-display text-2xl font-bold">{d.name}</div>
                  <div className="mt-1 text-xs text-white/80">{d.trips}</div>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-gold opacity-0 transition-opacity group-hover:opacity-100">
                    Discover →
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
