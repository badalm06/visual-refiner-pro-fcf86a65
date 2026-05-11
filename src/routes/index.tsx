import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Packages } from "@/components/site/Packages";
import { Destinations } from "@/components/site/Destinations";
import { ExploreBanner } from "@/components/site/ExploreBanner";
import { Inclusions } from "@/components/site/Inclusions";
import { Testimonials } from "@/components/site/Testimonials";
import { Blog } from "@/components/site/Blog";
import { Newsletter } from "@/components/site/Newsletter";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Travel India Tourism — India Tour Packages, Dubai & South Asia Holidays" },
      { name: "description", content: "Book curated India tour packages, Dubai holidays & South Asia trips with Travel India Tourism. 20+ years of expertise crafting all-inclusive journeys." },
      { property: "og:title", content: "Travel India Tourism — Discover Incredible India" },
      { property: "og:description", content: "Tailor-made tours, all-inclusive holidays and unforgettable journeys across India, Dubai & South Asia." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Packages />
        <Destinations />
        <ExploreBanner />
        <Inclusions />
        <Testimonials />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
