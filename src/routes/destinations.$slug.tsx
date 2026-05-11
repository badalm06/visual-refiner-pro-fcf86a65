import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import vrindavan from "@/assets/circle-vrindavan.jpg";
import mathura from "@/assets/circle-mathura.jpg";
import gokul from "@/assets/circle-gokul.jpg";
import govardhan from "@/assets/circle-govardhan.jpg";
import nandgaon from "@/assets/circle-nandgaon.jpg";
import barsana from "@/assets/circle-barsana.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

const DATA: Record<string, { name: string; cover: string; description: string }> = {
  vrindavan: { name: "Vrindavan", cover: vrindavan, description: "Sacred land of Lord Krishna's divine pastimes." },
  mathura: { name: "Mathura", cover: mathura, description: "The holy birthplace of Lord Krishna." },
  gokul: { name: "Gokul", cover: gokul, description: "Where Lord Krishna spent his childhood days." },
  govardhan: { name: "Govardhan", cover: govardhan, description: "The sacred hill lifted by Lord Krishna." },
  nandgaon: { name: "Nandgaon", cover: nandgaon, description: "Home of Nanda Maharaj, Krishna's foster father." },
  barsana: { name: "Barsana", cover: barsana, description: "The blessed birthplace of Shrimati Radharani." },
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
              <p className="mt-4 text-muted-foreground">Temple images coming soon — explore the divine sanctuaries of {data.name}.</p>
            </div>

            <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-[4/3] rounded-2xl bg-secondary shadow-soft flex items-center justify-center text-muted-foreground animate-fade-in"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <span className="text-sm">Temple image {i + 1}</span>
                </div>
              ))}
            </div>

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