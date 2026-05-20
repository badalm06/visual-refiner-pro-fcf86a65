import { BedDouble, UtensilsCrossed, Bus, HeadphonesIcon, MapIcon, Clock4, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

type Item = {
  icon: LucideIcon;
  title: string;
  desc: string;
  gradient: string;
  delay: string;
};

const ITEMS: Item[] = [
  { icon: BedDouble,        title: "Accommodation",     desc: "Hand-picked hotels & resorts.",            gradient: "linear-gradient(135deg, #FF6A00 0%, #FFB070 100%)", delay: "0s" },
  { icon: UtensilsCrossed,  title: "All meals",         desc: "Breakfast, lunch & dinner included.",      gradient: "linear-gradient(135deg, #E94E1B 0%, #FFC371 100%)", delay: "-0.6s" },
  { icon: Bus,              title: "On-tour transport", desc: "Private AC vehicles for the entire trip.", gradient: "linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)", delay: "-1.2s" },
  { icon: HeadphonesIcon,   title: "Tour assistance",   desc: "Local experts on call, every day.",        gradient: "linear-gradient(135deg, #7C3AED 0%, #C084FC 100%)", delay: "-1.8s" },
  { icon: MapIcon,          title: "Best tour plan",    desc: "Optimised routes that save your time.",    gradient: "linear-gradient(135deg, #047857 0%, #34D399 100%)", delay: "-2.4s" },
  { icon: Clock4,           title: "24/7 support",      desc: "Reach us anytime, anywhere.",              gradient: "linear-gradient(135deg, #0B0B0B 0%, #4A4A4A 100%)", delay: "-3s" },
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
              <div className="group hover-lift flex items-center gap-5 rounded-2xl border border-border bg-card p-6">
                <div
                  className="icon-3d h-14 w-14 shrink-0"
                  style={{ animationDelay: it.delay }}
                >
                  <div className="icon-3d-inner" style={{ background: it.gradient }}>
                    <it.icon className="icon-3d-icon h-7 w-7" strokeWidth={2.2} />
                    <span className="icon-3d-shine" />
                  </div>
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
