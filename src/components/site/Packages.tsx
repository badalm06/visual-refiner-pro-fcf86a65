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

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {PACKAGES.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <article className="hover-lift group overflow-hidden rounded-2xl bg-card shadow-soft">
                <div className="img-zoom relative aspect-[4/3]">
                  <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover" />
                  <div className="absolute inset-x-0 bottom-0 h-1/2" style={{ background: "var(--gradient-overlay)" }} />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-foreground">
                    <Star className="h-3 w-3 fill-gold text-gold" /> {p.rating}
                  </div>
                  <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 text-xs font-medium text-white">
                    <MapPin className="h-3.5 w-3.5" /> {p.location}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="line-clamp-1 text-lg font-semibold text-card-foreground">{p.title}</h3>
                  <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" /> {p.days}
                  </div>
                  <div className="mt-5 flex items-end justify-between border-t border-border pt-4">
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Starting from</div>
                      <div className="font-display text-2xl font-bold text-brand">
                        ₹{p.price.toLocaleString("en-IN")}
                      </div>
                    </div>
                    <button className="rounded-full bg-foreground px-5 py-2 text-xs font-semibold text-background transition-colors hover:bg-brand">
                      Book now
                    </button>
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
