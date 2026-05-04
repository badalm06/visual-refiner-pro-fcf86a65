import { BedDouble, UtensilsCrossed, Bus, HeadphonesIcon, MapIcon, Clock4 } from "lucide-react";
import { Reveal } from "./Reveal";

const ITEMS = [
  { icon: BedDouble, title: "Accommodation", desc: "Hand-picked hotels & resorts." },
  { icon: UtensilsCrossed, title: "All meals", desc: "Breakfast, lunch & dinner included." },
  { icon: Bus, title: "On-tour transport", desc: "Private AC vehicles for the entire trip." },
  { icon: HeadphonesIcon, title: "Tour assistance", desc: "Local experts on call, every day." },
  { icon: MapIcon, title: "Best tour plan", desc: "Optimised routes that save your time." },
  { icon: Clock4, title: "24/7 support", desc: "Reach us anytime, anywhere." },
];

export function Inclusions() {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="container-pro">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">Why us</span>
          <h2 className="mt-3 text-4xl font-bold text-foreground md:text-5xl">All-inclusive tours</h2>
          <p className="mt-4 text-muted-foreground">
            One transparent price — everything you need is taken care of.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it, i) => (
            <Reveal key={it.title} delay={i * 60}>
              <div className="hover-lift flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent text-brand">
                  <it.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground">{it.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
