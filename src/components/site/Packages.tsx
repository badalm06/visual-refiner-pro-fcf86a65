import brajCircle from "@/assets/brajmiles-circle.jpeg";
import day1 from "@/assets/day-1.jpg";
import day2 from "@/assets/day-2.jpg";
import day3 from "@/assets/barsana-temple.jpg";
import day4 from "@/assets/day-4.jpg";
import day5 from "@/assets/nandgaon-temple.jpg";
import day6 from "@/assets/day-6.jpg";
import braj1 from "@/assets/taj-mahal-2.jpg";
import { Reveal } from "./Reveal";

const TOURS = [
  { img: day1, title: "Vrindavan Tour", count: "Day-1" },
  { img: day2, title: "Govardhan Tour", count: "Day-2" },
  { img: day3, title: "Barsana Tour", count: "Day-3" },
  { img: day4, title: "Mathura Tour", count: "Day-4" },
  { img: day5, title: "Nandgaon Tour", count: "Day-3" },
   { img: day6, title: "Agra Tour", count: "Day-6" },
  { img: braj1, title: "Agra Tour", count: "Day-3" },
];

export function Packages() {
  return (
    <section id="packages" className="bg-secondary py-20 md:py-28">
      <div className="container-pro">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">memorable trips</span>
          <h2 className="mt-3 text-4xl font-extrabold text-foreground md:text-5xl">Complete Braj Tour</h2>
          <p className="mt-4 text-muted-foreground">
            Let's experience the divine &amp; spiritual journey of Braj
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {/* Promo card */}
          <Reveal className="lg:row-span-2">
            <article className="relative h-full min-h-[400px] overflow-hidden rounded-2xl shadow-soft">
              <img
                src={brajCircle}
                alt="Braj Map"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
              <div className="relative flex h-full flex-col justify-center p-8 text-white">
                <div className="font-display text-4xl md:text-5xl">
                  <em className="not-italic font-serif italic text-left">We Are Center of 'Braj'</em> <span className="font-semibold">​</span>
                </div>
                <div className="mt-4 text-5xl font-bold md:text-6xl">
                  ​<span className="text-3xl md:text-4xl">​</span>
                </div>
                <div className="text-2xl font-light tracking-widest">​</div>
                <button className="mt-6 w-fit rounded-full bg-white px-6 py-2.5 text-xs font-bold tracking-widest text-foreground hover:bg-brand hover:text-white transition-colors">
                  BOOK NOW
                </button>
              </div>
            </article>
          </Reveal>

          {/* Tour cards grid */}
          {TOURS.map((t, i) => (
            <Reveal key={t.title} delay={i * 60}>
              <article className="hover-lift group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft">
                <img
                  src={t.img}
                  alt={t.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/30" />
                <h3 className="absolute left-0 right-0 top-4 text-center text-lg font-bold text-white">
                  {t.title}
                </h3>
                <div className="absolute inset-x-4 bottom-4 rounded-md bg-white/85 px-4 py-2 text-center text-sm text-foreground backdrop-blur-sm font-extrabold">
                  {typeof t.count === "number" ? `${t.count} Tour Packages` : t.count}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
