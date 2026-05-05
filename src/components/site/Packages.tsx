import kashmir from "@/assets/dest-kashmir.jpg";
import kerala from "@/assets/dest-kerala.jpg";
import rajasthan from "@/assets/dest-rajasthan.jpg";
import ladakh from "@/assets/dest-ladakh.jpg";
import goa from "@/assets/dest-goa.jpg";
import darjeeling from "@/assets/dest-darjeeling.jpg";
import promo from "@/assets/hero-india.jpg";
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
        <Reveal className="flex flex-wrap items-end justify-between gap-6 text-left mx-[150px]">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand mx-[100px] text-center block">memorable trips</span>
            <h2 className="mt-3 text-4xl text-foreground md:text-5xl my-px text-center font-extrabold">Complete Braj Tour</h2>
            <p className="mt-4 text-muted-foreground text-center">
              Let's experience the divine & spritual journey of Braj
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-4 lg:grid-rows-2">
          {/* Promo card - spans 2 cols x 2 rows */}
          <Reveal className="lg:col-span-2 lg:row-span-2">
            <article className="hover-lift relative h-full min-h-[400px] overflow-hidden rounded-2xl shadow-soft">
              <img src={promo} alt="Exclusive Tour 20% off" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
              <div className="relative flex h-full flex-col justify-center p-8 text-white md:p-12">
                <h3 className="font-display text-4xl md:text-5xl">
                  <em className="font-light italic">Exclusive</em> <span className="font-bold">Tour</span>
                </h3>
                <div className="mt-4 font-display text-6xl font-bold md:text-7xl">
                  20<span className="text-3xl md:text-4xl align-top">%</span>
                </div>
                <div className="text-2xl font-light tracking-widest">OFF</div>
                <button className="mt-6 w-fit rounded-full bg-white px-7 py-3 text-xs font-bold tracking-widest text-foreground transition-transform hover:scale-105">
                  BOOK NOW
                </button>
              </div>
            </article>
          </Reveal>

          {TOURS.map((t, i) => (
            <Reveal key={t.title} delay={i * 60}>
              <article className="hover-lift group relative h-full min-h-[200px] overflow-hidden rounded-2xl shadow-soft">
                <img src={t.img} alt={t.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/30" />
                <h3 className="absolute left-4 right-4 top-4 text-lg font-bold text-white drop-shadow">{t.title}</h3>
                <div className="absolute inset-x-4 bottom-4 rounded-md bg-white/85 px-3 py-2 text-center text-sm font-medium text-foreground backdrop-blur">
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
