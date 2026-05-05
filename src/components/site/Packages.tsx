import kashmir from "@/assets/dest-kashmir.jpg";
import kerala from "@/assets/dest-kerala.jpg";
import rajasthan from "@/assets/dest-rajasthan.jpg";
import ladakh from "@/assets/dest-ladakh.jpg";
import goa from "@/assets/dest-goa.jpg";
import darjeeling from "@/assets/dest-darjeeling.jpg";
import { Reveal } from "./Reveal";

const TOURS = [
  { img: kashmir, title: "Kashmir Tour", count: 5 },
  { img: ladakh, title: "Ladakh Tour", count: 4 },
  { img: darjeeling, title: "Darjeeling Tour", count: 6 },
  { img: goa, title: "Andaman Tour", count: 4 },
  { img: rajasthan, title: "Rajasthan Tour", count: 5 },
  { img: kerala, title: "Kerala Tour", count: 6 },
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
                src={kashmir}
                alt="Exclusive Tour"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
              <div className="relative flex h-full flex-col justify-center p-8 text-white">
                <div className="font-display text-4xl md:text-5xl">
                  <em className="not-italic font-serif italic">Exclusive</em> <span className="font-semibold">Tour</span>
                </div>
                <div className="mt-4 text-5xl font-bold md:text-6xl">
                  20<span className="text-3xl md:text-4xl">%</span>
                </div>
                <div className="text-2xl font-light tracking-widest">OFF</div>
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
                <div className="absolute inset-x-4 bottom-4 rounded-md bg-white/85 px-4 py-2 text-center text-sm font-medium text-foreground backdrop-blur-sm">
                  {t.count} Tour Packages
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
