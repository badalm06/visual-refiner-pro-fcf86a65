import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import vrindavan from "@/assets/circle-vrindavan.jpg";
import mathura from "@/assets/circle-mathura.jpg";
import gokul from "@/assets/circle-gokul.jpg";
import govardhan from "@/assets/circle-govardhan.jpg";
import nandgaon from "@/assets/circle-nandgaon.jpg";
import barsana from "@/assets/circle-barsana.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

import mathuraJanmbhumi from "@/assets/mathura-janmbhumi.jpg";
import mathuraDwarkadhish from "@/assets/mathura-dwarkadhish.jpg";
import mathuraVishramGhat from "@/assets/mathura-vishram-ghat.jpg";
import mathuraBirla from "@/assets/mathura-birla.jpg";
import mathuraRangeshwar from "@/assets/mathura-rangeshwar.jpg";

import vrindavanPrem from "@/assets/vrindavan-prem-mandir.jpg";
import vrindavanBanke from "@/assets/vrindavan-banke-bihari.jpg";
import vrindavanKeli from "@/assets/vrindavan-keli-kunj.jpg";
import vrindavanNidhivan from "@/assets/vrindavan-nidhivan.jpg";
import vrindavanChardham from "@/assets/vrindavan-chardham.jpg";

import gokulRaman from "@/assets/gokul-raman-reti.jpg";
import gokulBrahmand from "@/assets/gokul-brahmand-ghat.jpg";
import gokulYogmaya from "@/assets/gokul-yogmaya.jpg";
import gokulChintaharan from "@/assets/gokul-chintaharan.jpg";
import gokulGaushala from "@/assets/gokul-gaushala.jpg";

import govardhanDanghati from "@/assets/govardhan-danghati.jpg";
import govardhanManasi from "@/assets/govardhan-manasi-ganga.jpg";
import govardhanKusum from "@/assets/govardhan-kusum-sarowar.jpg";
import govardhanRadhaKund from "@/assets/govardhan-radha-kund.jpg";

type Temple = { name: string; img: string };

const DATA: Record<string, { name: string; cover: string; description: string; temples: Temple[] }> = {
  vrindavan: {
    name: "Vrindavan",
    cover: vrindavan,
    description: "Sacred land of Lord Krishna's divine pastimes.",
    temples: [
      { name: "Prem Mandir", img: vrindavanPrem },
      { name: "Banke Bihari Mandir", img: vrindavanBanke },
      { name: "Keli Kunj", img: vrindavanKeli },
      { name: "Nidhivan", img: vrindavanNidhivan },
      { name: "Chardham Mandir", img: vrindavanChardham },
    ],
  },
  mathura: {
    name: "Mathura",
    cover: mathura,
    description: "The holy birthplace of Lord Krishna.",
    temples: [
      { name: "Shri Krishna Janmbhumi", img: mathuraJanmbhumi },
      { name: "Dwarkadhish", img: mathuraDwarkadhish },
      { name: "Vishram Ghat", img: mathuraVishramGhat },
      { name: "Birla Mandir", img: mathuraBirla },
      { name: "Rangeshwar Mahadev", img: mathuraRangeshwar },
    ],
  },
  gokul: {
    name: "Gokul",
    cover: gokul,
    description: "Where Lord Krishna spent his childhood days.",
    temples: [
      { name: "Raman Reti", img: gokulRaman },
      { name: "Brahmand Ghat", img: gokulBrahmand },
      { name: "Yogmaya Mandir", img: gokulYogmaya },
      { name: "Chintaharan Mahadev", img: gokulChintaharan },
      { name: "Gaushala", img: gokulGaushala },
    ],
  },
  govardhan: {
    name: "Govardhan",
    cover: govardhan,
    description: "The sacred hill lifted by Lord Krishna.",
    temples: [
      { name: "Danghati Mandir", img: govardhanDanghati },
      { name: "Manasi Ganga", img: govardhanManasi },
      { name: "Kusum Sarowar", img: govardhanKusum },
      { name: "Radha Kund", img: govardhanRadhaKund },
    ],
  },
  nandgaon: { name: "Nandgaon", cover: nandgaon, description: "Home of Nanda Maharaj, Krishna's foster father.", temples: [] },
  barsana: { name: "Barsana", cover: barsana, description: "The blessed birthplace of Shrimati Radharani.", temples: [] },
};

export const Route = createFileRoute("/destinations/$slug")({
  component: DestinationPage,
});

function DestinationPage() {
  const { slug } = useParams({ from: "/destinations/$slug" });
  const data = DATA[slug];

  if (!data) {
    return (
      <div className="bg-background">
        <Header />
        <main className="container-pro py-32 text-center">
          <h1 className="text-4xl font-bold">Destination not found</h1>
          <Link to="/" className="mt-6 inline-block text-brand underline">Go home</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-background animate-fade-in">
      <Header />
      <main>
        <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <img src={data.cover} alt={data.name} className="absolute inset-0 h-full w-full object-cover animate-scale-in" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
          <div className="container-pro relative flex h-full flex-col items-center justify-center text-center text-white">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold animate-fade-in">Sacred Destination</span>
            <h1 className="mt-3 text-5xl font-bold md:text-7xl animate-fade-in">{data.name}</h1>
            <p className="mt-4 max-w-2xl text-lg text-white/90 animate-fade-in">{data.description}</p>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-pro">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">Sacred Sites</span>
              <h2 className="mt-3 text-4xl font-bold text-foreground md:text-5xl">Temples of {data.name}</h2>
              {data.temples.length === 0 && (
                <p className="mt-4 text-muted-foreground">Temple images coming soon — explore the divine sanctuaries of {data.name}.</p>
              )}
            </div>

            {data.temples.length > 0 && (
              <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {data.temples.map((t, i) => (
                  <div
                    key={t.name}
                    className="group overflow-hidden rounded-2xl bg-secondary shadow-soft animate-fade-in"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={t.img} alt={t.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold text-foreground">{i + 1}. {t.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-12 text-center">
              <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white hover:bg-brand/90 transition-colors">
                ← Back to all destinations
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}