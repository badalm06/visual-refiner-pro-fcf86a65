import { Mail } from "lucide-react";
import { Reveal } from "./Reveal";

export function Newsletter() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container-pro">
        <Reveal>
          <div className="overflow-hidden rounded-3xl bg-gradient-brand p-10 text-brand-foreground shadow-card md:p-16">
            <div className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
              <div>
                <h2 className="font-display text-3xl font-bold leading-tight text-balance md:text-5xl">
                  Get special offers and travel inspiration in your inbox
                </h2>
                <p className="mt-4 max-w-lg text-brand-foreground/85">
                  Join 25,000+ travellers receiving curated deals, itineraries, and seasonal
                  recommendations from Travel India.
                </p>
              </div>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-3 rounded-2xl bg-background/95 p-3 shadow-soft sm:flex-row sm:items-center"
              >
                <label className="flex flex-1 items-center gap-2 px-4 text-foreground">
                  <Mail className="h-4 w-4 text-brand" />
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground"
                  />
                </label>
                <button
                  type="submit"
                  className="rounded-xl bg-foreground px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-brand-dark"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
