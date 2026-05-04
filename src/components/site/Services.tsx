import { Plane, Hotel, Car, Compass, Ship, Mountain } from "lucide-react";
import { Reveal } from "./Reveal";

const SERVICES = [
  { icon: Plane, title: "Flight Bookings", desc: "Best fares on domestic and international routes." },
  { icon: Hotel, title: "Hotel Stays", desc: "Hand-picked properties in every budget tier." },
  { icon: Car, title: "Private Transport", desc: "Comfortable cabs and tempo travellers, 24/7." },
  { icon: Compass, title: "Custom Itineraries", desc: "Tours shaped around what you love most." },
  { icon: Ship, title: "Cruises & Houseboats", desc: "Backwaters, Andaman, and luxury cruises." },
  { icon: Mountain, title: "Adventure Tours", desc: "Treks, rafting and high-altitude expeditions." },
];

export function Services() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-pro">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">What we do</span>
          <h2 className="mt-3 text-4xl font-bold text-foreground md:text-5xl">Our Services</h2>
          <p className="mt-4 text-muted-foreground">
            Everything you need for a seamless journey — under one roof.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <div className="hover-lift group h-full rounded-2xl border border-border bg-card p-7">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-brand-foreground shadow-soft transition-transform group-hover:scale-110">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-card-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
