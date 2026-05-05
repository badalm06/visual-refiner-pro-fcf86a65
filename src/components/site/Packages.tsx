import kashmir from "@/assets/dest-kashmir.jpg";
import kerala from "@/assets/dest-kerala.jpg";
import rajasthan from "@/assets/dest-rajasthan.jpg";
import ladakh from "@/assets/dest-ladakh.jpg";
import goa from "@/assets/dest-goa.jpg";
import darjeeling from "@/assets/dest-darjeeling.jpg";
import { Clock, MapPin, Star } from "lucide-react";
import { Reveal } from "./Reveal";

const PACKAGES = [
  { img: kashmir, title: "Srinagar · Pahalgam · Gulmarg", days: "6N / 7D", location: "Kashmir", price: 28999, rating: 4.9 },
  { img: kerala, title: "Munnar · Alleppey Houseboat", days: "5N / 6D", location: "Kerala", price: 22499, rating: 4.8 },
  { img: rajasthan, title: "Jaipur · Ranthambore Wildlife", days: "4N / 5D", location: "Rajasthan", price: 18999, rating: 4.7 },
  { img: ladakh, title: "Leh · Pangong · Nubra Valley", days: "7N / 8D", location: "Ladakh", price: 34999, rating: 4.9 },
  { img: goa, title: "North & South Goa Beaches", days: "3N / 4D", location: "Goa", price: 12999, rating: 4.6 },
  { img: darjeeling, title: "Darjeeling · Gangtok Hills", days: "5N / 6D", location: "West Bengal", price: 19999, rating: 4.8 },
];

export function Packages() {
  return (
    <section id="packages" className="bg-secondary py-20 md:py-28">
      <div className="container-pro">
        <Reveal className="flex flex-wrap items-end justify-between gap-6 text-left mx-[150px]">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand mx-[100px] text-center block">memorable  trips</span>
            <h2 className="mt-3 text-4xl text-foreground md:text-5xl my-px text-center font-extrabold border-orange-600 border-0 rounded-none">Complete Braj Tour</h2>
            <p className="mt-4 text-muted-foreground text-center">
              Let's experience the divine & spritual journey of Braj
            </p>
          </div>
          <a href="#" className="text-sm font-semibold text-brand hover:underline">​</a>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {/* Featured promo card (left, spans 2 rows) */}
          <Reveal className="lg:row-span-2">
            <article className="relative h-full min-h-[420px] overflow-hidden rounded-2xl shadow-soft">
              <img
                src={PACKAGES[0].img}
                alt="Exclusive Tour"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
              <div className="relative flex h-full flex-col justify-center p-8 text-white">
                <div className="font-display text-4xl md:text-5xl">
                  <span className="italic">Exclusive</span> <span className="font-bold">Tour</span>
                </div>
                <div className="mt-4 text-5xl font-bold md:text-6xl">
                  20<span className="text-3xl align-top">%</span>
                </div>
                <div className="mt-1 text-lg tracking-wider">OFF</div>
                <button className="mt-6 w-fit rounded-full bg-white px-6 py-2 text-xs font-bold tracking-widest text-foreground hover:bg-brand hover:text-background">
                  BOOK NOW
                </button>
              </div>
            </article>
          </Reveal>

          {/* Right grid: 2 columns x 2 rows with remaining packages */}
          {PACKAGES.slice(0, 6).map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <article className="hover-lift group relative overflow-hidden rounded-2xl shadow-soft">
                <div className="img-zoom relative aspect-[4/3]">
                  <img src={p.img} alt={`${p.location} Tour`} loading="lazy" className="h-full w-full object-cover" />
                  <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/60 to-transparent" />
                  <h3 className="absolute left-4 top-3 text-lg font-bold text-white drop-shadow">
                    {p.location} Tour
                  </h3>
                  <div className="absolute inset-x-4 bottom-3 rounded-md bg-white/80 py-1.5 text-center text-xs font-medium text-foreground backdrop-blur">
                    {Math.max(3, Math.round(p.rating))} Tour Packages
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
