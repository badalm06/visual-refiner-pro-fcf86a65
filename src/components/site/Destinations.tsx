import { Link } from "@tanstack/react-router";
import vrindavan from "@/assets/circle-vrindavan.jpg";
import mathura from "@/assets/circle-mathura.jpg";
import gokul from "@/assets/circle-gokul.jpg";
import govardhan from "@/assets/circle-govardhan.jpg";
import nandgaon from "@/assets/circle-nandgaon.jpg";
import barsana from "@/assets/circle-barsana.jpg";
import { Reveal } from "./Reveal";

const TOP = [
  {
    img: vrindavan,
    name: "Vrindavan",
    slug: "vrindavan",
    desc: "Sacred land of Krishna's divine pastimes — Banke Bihari, Prem Mandir & Nidhivan.",
  },
  {
    img: mathura,
    name: "Mathura",
    slug: "mathura",
    desc: "The holy birthplace of Lord Krishna — Shri Krishna Janmbhumi & Vishram Ghat.",
  },
  {
    img: gokul,
    name: "Gokul",
    slug: "gokul",
    desc: "Where Krishna spent his blessed childhood — Raman Reti & Brahmand Ghat.",
  },
  {
    img: govardhan,
    name: "Govardhan",
    slug: "govardhan",
    desc: "The sacred hill lifted by Lord Krishna — Govardhan Parikrama & Radha Kund.",
  },
  {
    img: nandgaon,
    name: "Nandgaon",
    slug: "nandgaon",
    desc: "Home of Nanda Maharaj, Krishna's foster father — Nandmahal & Lathmar Holi.",
  },
  {
    img: barsana,
    name: "Barsana",
    slug: "barsana",
    desc: "Blessed birthplace of Shrimati Radharani — Radha Rani temple & Kirti Mandir.",
  },
];

export function Destinations() {
  return (
    <section id="destinations" className="py-20 md:py-28" aria-labelledby="destinations-heading">
      <div className="container-pro">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            Braj Dham
          </span>
          <h2
            id="destinations-heading"
            className="mt-3 text-4xl font-bold text-foreground md:text-5xl"
          >
            Sacred Braj Destinations
          </h2>
          <p className="mt-4 text-muted-foreground">
            Explore the divine Braj Mandal — six sacred towns that form the heart of Lord
            Krishna's eternal leela. Braj Miles curates immersive yatra experiences across
            Vrindavan, Mathura, Govardhan, Gokul, Barsana &amp; Nandgaon.
          </p>
        </Reveal>

        {/* Desktop: 6-column circles */}
        <div className="mt-14 hidden gap-5 sm:grid sm:grid-cols-3 lg:grid-cols-6">
          {TOP.map((d, i) => (
            <Reveal key={d.name} delay={i * 60}>
              <div className="flex flex-col items-center gap-3 text-center">
                <Link
                  to="/destinations/$slug"
                  params={{ slug: d.slug }}
                  className="img-zoom group relative block aspect-square w-full overflow-hidden rounded-full transition-transform duration-300 hover:scale-105"
                  aria-label={`Explore ${d.name} — ${d.desc}`}
                >
                  <img
                    src={d.img}
                    alt={`${d.name} — Braj Miles spiritual tour destination`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-gold">
                      Discover →
                    </span>
                  </div>
                </Link>
                <div>
                  <h3 className="text-sm font-bold text-foreground">{d.name}</h3>
                  <p className="mt-0.5 text-xs text-muted-foreground leading-snug">{d.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Mobile: 2-column with names visible */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:hidden">
          {TOP.map((d, i) => (
            <Reveal key={d.name} delay={i * 60}>
              <Link
                to="/destinations/$slug"
                params={{ slug: d.slug }}
                className="group relative overflow-hidden rounded-2xl shadow-soft"
                aria-label={`Explore ${d.name}`}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={d.img}
                    alt={`${d.name} — Braj Miles tour`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                  <span className="text-sm font-bold text-white">{d.name}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Keyword-rich descriptive text for SEO — hidden visually on small screens */}
        <Reveal className="mt-16 rounded-2xl bg-secondary p-6 md:p-8">
          <p className="text-center text-sm leading-relaxed text-muted-foreground md:text-base">
            <strong className="text-foreground">Braj Miles</strong> is your trusted partner for
            spiritual tourism in Braj Bhoomi. Whether you are planning a{" "}
            <strong className="text-foreground">Govardhan Parikrama</strong>, seeking darshan at{" "}
            <strong className="text-foreground">Banke Bihari Mandir in Vrindavan</strong>, or
            celebrating <strong className="text-foreground">Lathmar Holi in Barsana</strong> —
            we handle every detail so you can focus on your devotion. Our Braj yatra packages
            cover all six sacred towns of the{" "}
            <strong className="text-foreground">Braj Mandal</strong> with comfortable transport,
            satvik meals, and expert local guides.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
