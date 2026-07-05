import { Reveal } from "./Reveal";
import luxuryStay from "@/assets/service-luxury-stay.png";
import transport from "@/assets/service-transport.png";
import tourGuide from "@/assets/service-tour-guide.png";

const SERVICES = [
  {
    img: luxuryStay,
    title: "Luxury Stay",
    desc: "Hand-picked hotels & resorts near Vrindavan, Mathura & Govardhan — clean, comfortable and satvik.",
  },
  {
    img: transport,
    title: "Complete Transport",
    desc: "Private AC vehicles for Braj Mandal parikrama, airport transfers and full-trip intercity travel.",
  },
  {
    img: tourGuide,
    title: "Tour Guide",
    desc: "Knowledgeable local guides who bring the stories of Krishna's leela alive at every sacred site.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28" aria-labelledby="services-heading">
      <div className="container-pro">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            What we offer
          </span>
          <h2 id="services-heading" className="mt-3 text-4xl font-bold text-foreground md:text-5xl">
            Our Services
          </h2>
          <p className="mt-4 text-muted-foreground">
            Braj Miles takes care of every detail - stay, transport and guidance - so your
            Braj Yatra is effortless and spiritually enriching.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <div className="hover-lift group flex flex-col items-center justify-between rounded-2xl bg-[#BFE0FF] p-6 h-full">
                <div className="flex flex-1 items-center justify-center w-full">
                  <img
                    src={s.img}
                    alt={`${s.title} — Braj Miles tour service`}
                    className="max-h-[200px] w-auto object-contain transition-transform duration-300 group-hover:scale-105 sm:max-h-[78%]"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
