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
  { icon: BedDouble,       title: "Accommodation",     desc: "Hand-picked hotels & dharamshalas near Vrindavan, Mathura & Govardhan — clean, satvik and comfortable.",                             gradient: "linear-gradient(135deg, #FF6A00 0%, #FFB070 100%)", delay: "0s" },
  { icon: UtensilsCrossed, title: "All Meals",          desc: "Pure satvik breakfast, lunch & dinner throughout your Braj Yatra — no compromise on food quality.",                                  gradient: "linear-gradient(135deg, #E94E1B 0%, #FFC371 100%)", delay: "-0.6s" },
  { icon: Bus,             title: "On-tour Transport",  desc: "Private AC vehicles for Govardhan Parikrama, Braj Mandal darshan and all intercity transfers.",                                     gradient: "linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)", delay: "-1.2s" },
  { icon: HeadphonesIcon,  title: "Tour Assistance",    desc: "Local Braj experts available every day to guide you through temples, ghats and sacred sites.",                                      gradient: "linear-gradient(135deg, #7C3AED 0%, #C084FC 100%)", delay: "-1.8s" },
  { icon: MapIcon,         title: "Best Tour Plan",     desc: "Optimised Braj Yatra routes — covering Vrindavan, Mathura, Govardhan, Gokul, Barsana & Nandgaon efficiently.",                    gradient: "linear-gradient(135deg, #047857 0%, #34D399 100%)", delay: "-2.4s" },
  { icon: Clock4,          title: "24/7 Support",       desc: "Reach the Braj Miles team anytime before, during, or after your spiritual journey.",                                                gradient: "linear-gradient(135deg, #0B0B0B 0%, #4A4A4A 100%)", delay: "-3s" },
];

export function Inclusions() {
  return (
    <section className="bg-secondary py-20 md:py-28" aria-labelledby="inclusions-heading">
      <div className="container-pro">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">Why Braj Miles</span>
          <h2 id="inclusions-heading" className="mt-3 text-4xl font-bold text-foreground md:text-5xl">
            All-Inclusive Braj Yatra
          </h2>
          <p className="mt-4 text-muted-foreground">
            One transparent price — every detail of your Braj pilgrimage is taken care of by
            Braj Miles, from Vrindavan to Govardhan and beyond.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it, i) => (
            <Reveal key={it.title} delay={i * 60}>
              <div className="group hover-lift flex items-center gap-5 rounded-2xl border border-border bg-card p-6 h-full">
                <div className="icon-3d h-14 w-14 shrink-0" style={{ animationDelay: it.delay }}>
                  <div className="icon-3d-inner" style={{ background: it.gradient }}>
                    <it.icon className="icon-3d-icon h-7 w-7" strokeWidth={2.2} aria-hidden="true" />
                    <span className="icon-3d-shine" />
                  </div>
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-card-foreground">{it.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
