import { Link } from "@tanstack/react-router";
import vrindavan from "@/assets/circle-vrindavan.jpg";
import mathura from "@/assets/circle-mathura.jpg";
import gokul from "@/assets/circle-gokul.jpg";
import govardhan from "@/assets/circle-govardhan.jpg";
import nandgaon from "@/assets/circle-nandgaon.jpg";
import barsana from "@/assets/circle-barsana.jpg";
import { Reveal } from "./Reveal";

const TOP = [
  { img: vrindavan, name: "Vrindavan", slug: "vrindavan" },
  { img: mathura, name: "Mathura", slug: "mathura" },
  { img: gokul, name: "Gokul", slug: "gokul" },
  { img: govardhan, name: "Govardhan", slug: "govardhan" },
  { img: nandgaon, name: "Nandgaon", slug: "nandgaon" },
  { img: barsana, name: "Barsana", slug: "barsana" },
];

export function Destinations() {
  return (
    <section id="destinations" className="py-20 md:py-28">
      <div className="container-pro">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">Explore the world</span>
          <h2 className="mt-3 text-4xl font-bold text-foreground md:text-5xl">Top destinations</h2>
          <p className="mt-4 text-muted-foreground">Beyond India — curated international getaways.</p>
        </Reveal>

        <div className="mt-14 grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {TOP.map((d, i) => (
            <Reveal key={d.name} delay={i * 60}>
              <Link
                to="/destinations/$slug"
                params={{ slug: d.slug }}
                className="img-zoom group relative block aspect-square overflow-hidden rounded-full transition-transform duration-300 hover:scale-105"
              >
                <img src={d.img} alt={d.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-gold">
                    Discover →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
