import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Packages } from "@/components/site/Packages";
import { Destinations } from "@/components/site/Destinations";
import { ExploreBanner } from "@/components/site/ExploreBanner";
import { Inclusions } from "@/components/site/Inclusions";
import { Testimonials } from "@/components/site/Testimonials";
import { Newsletter } from "@/components/site/Newsletter";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
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
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
