import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import logo from "@/assets/brajmiles-logo.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-pro grid gap-12 py-20 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="Brajmiles.com logo" className="h-12 w-12 rounded-full object-cover" />
            <div>
              <div className="font-display text-base font-bold">Brajmiles.com</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-background/60">&nbsp; Pvt. Ltd.</div>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-background/70">
            20+ years of crafting memorable journeys across India, Dubai &amp; South Asia.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full bg-background/10 text-background transition-colors hover:bg-brand">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold">Company</h3>
          <ul className="mt-5 space-y-3 text-sm text-background/70">
            {["About us", "Our team", "Careers", "Press", "Blog"].map((l) => (
              <li key={l}><a href="#" className="transition-colors hover:text-gold">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold">Quick links</h3>
          <ul className="mt-5 space-y-3 text-sm text-background/70">
            {["Tour packages", "Destinations", "Visa services", "Travel insurance", "FAQs"].map((l) => (
              <li key={l}><a href="#" className="transition-colors hover:text-gold">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold">Contact</h3>
          <ul className="mt-5 space-y-4 text-sm text-background/70">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-gold" />
              <span>+91 75524 21243<br />Reach us 24/7</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-gold" />
              <span>hello@travelindia.com</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-gold" />
              <span>Mumbai · Delhi · Bengaluru</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container-pro flex flex-col items-center justify-between gap-3 py-6 text-xs text-background/60 md:flex-row">
          <div>© {new Date().getFullYear()} Brajmiles.com Pvt. Ltd. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gold">Privacy</a>
            <a href="#" className="hover:text-gold">Terms</a>
            <a href="#" className="hover:text-gold">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
