import { Reveal } from "./Reveal";
import luxuryStay from "@/assets/service-luxury-stay.jpeg";
import transport from "@/assets/service-transport.jpeg";
import tourGuide from "@/assets/service-tour-guide.jpeg";

const SERVICES = [
  { img: luxuryStay, title: "Luxury Stay" },
  { img: transport, title: "Complete Transport" },
  { img: tourGuide, title: "Tour Guide" },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container-pro">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-foreground md:text-5xl">Our Services</h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <div className="hover-lift group flex aspect-square flex-col items-center justify-between rounded-2xl bg-[#BFE0FF] p-6">
                <div className="flex flex-1 items-center justify-center">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="max-h-[78%] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground md:text-2xl">
                  {s.title}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
