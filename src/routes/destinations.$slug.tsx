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

import nandgaonNandmahal from "@/assets/nandgaon-nandmahal.jpg";

import barsanaRadha from "@/assets/barsana-radha-janmsthan.jpg";
import barsanaRangili from "@/assets/barsana-rangili-mahal.jpg";
import barsanaKirti from "@/assets/barsana-kirti-mandir.jpg";

type Temple = { name: string; img: string; desc?: string };

const DATA: Record<
  string,
  {
    name: string;
    cover: string;
    description: string;
    longDesc: string;
    temples: Temple[];
  }
> = {
  vrindavan: {
    name: "Vrindavan",
    cover: vrindavan,
    description: "Sacred land of Lord Krishna's divine pastimes.",
    longDesc:
      "Vrindavan is one of the most sacred towns in India, situated on the banks of the Yamuna river in Mathura district, Uttar Pradesh. It is here that Lord Krishna performed his divine childhood leelas — from Rasa Lila to Kaliya Daman. Braj Miles curates immersive Vrindavan tour packages that take you to Banke Bihari Mandir, Prem Mandir, Nidhivan, ISKCON Vrindavan and more. Experience the mangal aarti at dawn and lose yourself in the devotional atmosphere of Braj Bhoomi.",
    temples: [
      { name: "Prem Mandir", img: vrindavanPrem, desc: "A grand marble temple of divine love" },
      { name: "Banke Bihari Mandir", img: vrindavanBanke, desc: "The most beloved Krishna temple in Vrindavan" },
      { name: "Keli Kunj", img: vrindavanKeli, desc: "Sacred grove of Krishna's pastimes" },
      { name: "Nidhivan", img: vrindavanNidhivan, desc: "Mysterious forest of the eternal Rasa Lila" },
      { name: "Chardham Mandir", img: vrindavanChardham, desc: "Visit all four dhams in one place" },
    ],
  },
  mathura: {
    name: "Mathura",
    cover: mathura,
    description: "The holy birthplace of Lord Krishna.",
    longDesc:
      "Mathura is the holiest city in Braj Mandal and the birthplace of Lord Krishna. Located on the sacred Yamuna river, Mathura is home to Shri Krishna Janmbhumi — the exact spot where Lord Krishna was born. Braj Miles' Mathura darshan packages cover all major temples and ghats, including Vishram Ghat where Krishna rested after slaying Kansa, Dwarkadhish Mandir, and Birla Mandir. A Mathura tour with Braj Miles is a complete spiritual experience for devotees of all ages.",
    temples: [
      { name: "Shri Krishna Janmbhumi", img: mathuraJanmbhumi, desc: "The sacred birthplace of Lord Krishna" },
      { name: "Dwarkadhish Temple", img: mathuraDwarkadhish, desc: "Magnificent temple of Lord Dwarkadhish" },
      { name: "Vishram Ghat", img: mathuraVishramGhat, desc: "Where Krishna rested after slaying Kansa" },
      { name: "Birla Mandir", img: mathuraBirla, desc: "A beautifully carved modern temple" },
      { name: "Rangeshwar Mahadev", img: mathuraRangeshwar, desc: "Ancient Shiva temple in Mathura" },
    ],
  },
  gokul: {
    name: "Gokul",
    cover: gokul,
    description: "Where Lord Krishna spent his blessed childhood days.",
    longDesc:
      "Gokul is the sacred village where Nanda Maharaj and Yashoda Maiya raised infant Krishna after he was secretly brought from Mathura. Walking through the lanes of Gokul with Braj Miles, you relive the stories of Krishna's early childhood — from Putana Moksha to the lifting of Govardhan. The holy Raman Reti sand, Brahmand Ghat where Krishna revealed his cosmic form, and Yogmaya Mandir are key highlights of a Gokul yatra.",
    temples: [
      { name: "Raman Reti", img: gokulRaman, desc: "Sacred sand where Krishna played as a child" },
      { name: "Brahmand Ghat", img: gokulBrahmand, desc: "Where Krishna showed Yashoda the universe" },
      { name: "Yogmaya Mandir", img: gokulYogmaya, desc: "Temple of the divine illusion goddess" },
      { name: "Chintaharan Mahadev", img: gokulChintaharan, desc: "Shiva temple that removes all worries" },
      { name: "Gaushala", img: gokulGaushala, desc: "Ancient cow sanctuary of Gokul" },
    ],
  },
  govardhan: {
    name: "Govardhan",
    cover: govardhan,
    description: "The sacred hill lifted by Lord Krishna.",
    longDesc:
      "Govardhan Hill is one of the most sacred sites in the entire Braj Mandal. Lord Krishna lifted this divine hill on his little finger for seven days to protect the people of Vraja from Indra's torrential rains. The Govardhan Parikrama — a 21 km circumambulation of the hill — is considered one of the most spiritually rewarding acts for a devotee. Braj Miles organises Govardhan Parikrama packages with comfortable halts at Radha Kund, Kusum Sarovar and Manasi Ganga.",
    temples: [
      { name: "Danghati Mandir", img: govardhanDanghati, desc: "Govardhan's most visited temple" },
      { name: "Manasi Ganga", img: govardhanManasi, desc: "Sacred kund at the heart of Govardhan" },
      { name: "Kusum Sarovar", img: govardhanKusum, desc: "Beautiful ancient stepwell lake" },
      { name: "Radha Kund", img: govardhanRadhaKund, desc: "Most sacred kund in all of Braj" },
    ],
  },
  nandgaon: {
    name: "Nandgaon",
    cover: nandgaon,
    description: "Home of Nanda Maharaj, Krishna's foster father.",
    longDesc:
      "Nandgaon is the village of Nanda Maharaj — the foster father of Lord Krishna — located about 8 km from Barsana. The famous Nandmahal temple here sits atop a hill and offers panoramic views of the Braj countryside. Nandgaon is also celebrated for the Lathmar Holi, where the men of Nandgaon come to Barsana and are chased away by women with sticks in a joyful re-enactment of Krishna's playful visit to Radha Rani. Braj Miles includes Nandgaon in all comprehensive Braj Yatra packages.",
    temples: [
      { name: "Nandmahal", img: nandgaonNandmahal, desc: "Palace temple of Nanda Maharaj atop the hill" },
    ],
  },
  barsana: {
    name: "Barsana",
    cover: barsana,
    description: "The blessed birthplace of Shrimati Radharani.",
    longDesc:
      "Barsana is the birthplace of Shrimati Radharani — the eternal consort of Lord Krishna. Perched on four hills, Barsana is home to the magnificent Radha Rani temple and is considered the most sacred place for devotees of Radha Rani. Barsana is world-famous for Lathmar Holi — a unique celebration where women playfully beat men with sticks. Braj Miles offers special Barsana tour packages, including Lathmar Holi experiences, darshan at Kirti Mandir and Rangili Mahal.",
    temples: [
      { name: "Shri Radha Janmsthan", img: barsanaRadha, desc: "Sacred birthplace of Shrimati Radharani" },
      { name: "Rangili Mahal", img: barsanaRangili, desc: "Colourful palace of the Holi celebrations" },
      { name: "Kirti Mandir", img: barsanaKirti, desc: "Temple dedicated to Radha Rani's mother" },
    ],
  },
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
          <Link to="/" className="mt-6 inline-block text-brand underline">
            Go home
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-background animate-fade-in">
      <Header />
      <main>
        {/* Hero banner */}
        <section className="relative h-[55vh] min-h-[360px] overflow-hidden md:h-[60vh]">
          <img
            src={data.cover}
            alt={`${data.name} — Braj Miles spiritual tour destination`}
            className="absolute inset-0 h-full w-full object-cover animate-scale-in"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
          <div className="container-pro relative flex h-full flex-col items-center justify-center px-5 text-center text-white">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Braj Miles — Sacred Destination
            </span>
            <h1 className="mt-3 text-4xl font-bold md:text-7xl">{data.name}</h1>
            <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">
              {data.description}
            </p>
          </div>
        </section>

        {/* About section */}
        <section className="py-12 md:py-16">
          <div className="container-pro">
            <div className="mx-auto max-w-3xl rounded-2xl bg-secondary p-6 md:p-10">
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                About {data.name}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{data.longDesc}</p>
              <a
                href="https://wa.me/919027674560"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-bold text-white shadow-card transition-transform hover:-translate-y-0.5"
              >
                Book {data.name} Tour with Braj Miles →
              </a>
            </div>
          </div>
        </section>

        {/* Temples section */}
        <section className="pb-20 md:pb-28">
          <div className="container-pro">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                Sacred Sites
              </span>
              <h2 className="mt-3 text-4xl font-bold text-foreground md:text-5xl">
                Temples of {data.name}
              </h2>
              {data.temples.length === 0 && (
                <p className="mt-4 text-muted-foreground">
                  Temple images coming soon — explore the divine sanctuaries of {data.name}.
                </p>
              )}
            </div>

            {data.temples.length > 0 && (
              <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {data.temples.map((t, i) => (
                  <article
                    key={t.name}
                    className="group overflow-hidden rounded-2xl bg-secondary shadow-soft animate-fade-in"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={t.img}
                        alt={`${t.name}, ${data.name} — Braj Miles tour`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold text-foreground">
                        {i + 1}. {t.name}
                      </h3>
                      {t.desc && (
                        <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            )}

            <div className="mt-12 flex flex-wrap justify-center gap-3">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white hover:bg-brand/90 transition-colors"
              >
                ← Back to all destinations
              </Link>
              <a
                href="https://wa.me/919027674560"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-brand px-6 py-3 text-sm font-bold text-brand hover:bg-brand hover:text-white transition-colors"
              >
                Plan your {data.name} yatra
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
