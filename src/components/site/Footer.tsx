import { Facebook, Instagram, Mail, Phone, Youtube } from "lucide-react";

const PHONE_DISPLAY = "+91 90276 74560";
const PHONE_TEL = "tel:+919027674560";
const EMAIL = "brajmiles@gmail.com";
const WHATSAPP_URL = "https://wa.me/919027674560";
const INSTAGRAM_URL = "https://www.instagram.com/brajmiles.in";
const FACEBOOK_URL = "https://www.facebook.com/share/1DSuuZCJ8m/";
const YOUTUBE_URL = "https://youtube.com/@manojfojimathura";

const WhatsAppIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
    <path d="M19.11 17.27c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.83-2.01-.22-.53-.45-.46-.61-.46-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.11 2.81.14.18 1.92 2.93 4.65 4.11.65.28 1.16.45 1.55.58.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32zM16.02 5.33c-5.89 0-10.67 4.78-10.67 10.67 0 1.88.49 3.71 1.43 5.33L5.33 26.67l5.5-1.43a10.65 10.65 0 0 0 5.19 1.34h.01c5.88 0 10.66-4.78 10.66-10.67 0-2.85-1.11-5.53-3.12-7.55a10.6 10.6 0 0 0-7.55-3.13zm6.34 17.01a8.84 8.84 0 0 1-6.34 2.62h-.01a8.85 8.85 0 0 1-4.51-1.24l-.32-.19-3.27.85.87-3.18-.21-.33a8.85 8.85 0 0 1-1.36-4.71c0-4.9 3.99-8.88 8.89-8.88 2.37 0 4.6.93 6.28 2.61a8.82 8.82 0 0 1 2.6 6.28c-.01 4.9-4 8.88-8.92 8.88z"/>
  </svg>
);

const BRAJ_DESTINATIONS = [
  { label: "Vrindavan Tour", href: "/destinations/vrindavan" },
  { label: "Mathura Darshan", href: "/destinations/mathura" },
  { label: "Govardhan Parikrama", href: "/destinations/govardhan" },
  { label: "Gokul Yatra", href: "/destinations/gokul" },
  { label: "Barsana Tour", href: "/destinations/barsana" },
  { label: "Nandgaon Trip", href: "/destinations/nandgaon" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-pro grid gap-10 py-16 sm:grid-cols-2 md:grid-cols-4 md:py-20">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/brajmiles-logo.png"
              alt="Braj Miles logo"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <div className="font-display text-base font-bold">Braj Miles</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-background/60">
                Pvt. Ltd.
              </div>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-background/70">
            20+ years of crafting memorable spiritual journeys across Braj Dham — Vrindavan,
            Mathura, Govardhan, Gokul, Barsana &amp; Nandgaon — and beyond to India, Dubai
            &amp; South Asia.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              { Icon: Instagram, href: INSTAGRAM_URL, label: "Instagram" },
              { Icon: Facebook, href: FACEBOOK_URL, label: "Facebook" },
              { Icon: Youtube, href: YOUTUBE_URL, label: "YouTube" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Braj Miles on ${label}`}
                className="grid h-9 w-9 place-items-center rounded-full bg-background/10 text-background transition-colors hover:bg-brand"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Braj Miles on WhatsApp"
              className="grid h-9 w-9 place-items-center rounded-full bg-brand text-brand-foreground transition-transform hover:-translate-y-0.5"
            >
              <WhatsAppIcon />
            </a>
          </div>
        </div>

        {/* Braj Destinations — SEO-rich internal links */}
        <div>
          <h3 className="font-display text-lg font-semibold">Braj Destinations</h3>
          <ul className="mt-5 space-y-3 text-sm text-background/70">
            {BRAJ_DESTINATIONS.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="transition-colors hover:text-gold">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-display text-lg font-semibold">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm text-background/70">
            {[
              { label: "Tour packages", href: "/#packages" },
              { label: "All destinations", href: "/#destinations" },
              { label: "Our services", href: "/#services" },
              { label: "Testimonials", href: "/#testimonials" },
              { label: "Contact us", href: WHATSAPP_URL },
            ].map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="transition-colors hover:text-gold">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display text-lg font-semibold">Contact</h3>
          <ul className="mt-5 space-y-4 text-sm text-background/70">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <a href={PHONE_TEL} className="hover:text-gold">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                WhatsApp chat
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <a href={`mailto:${EMAIL}`} className="hover:text-gold break-all">
                {EMAIL}
              </a>
            </li>
            <li className="mt-2 text-xs text-background/50 leading-relaxed">
              Based in Mathura, Uttar Pradesh, India —<br />
              serving pilgrims since 2000+
            </li>
          </ul>
        </div>
      </div>

      {/* SEO keyword footer paragraph */}
      <div className="border-t border-background/10">
        <div className="container-pro py-6">
          <p className="text-center text-xs text-background/40 leading-relaxed max-w-4xl mx-auto">
            Braj Miles offers Braj Yatra packages, Govardhan Parikrama tours, Vrindavan darshan trips,
            Mathura pilgrimage packages, Barsana Holi tours, Gokul yatra and Nandgaon excursions.
            We also serve international destinations including Dubai and across South Asia.
          </p>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container-pro flex flex-col items-center justify-between gap-3 py-5 text-xs text-background/60 md:flex-row">
          <div>© {new Date().getFullYear()} Braj Miles Pvt. Ltd. All rights reserved.</div>
          <div className="flex flex-wrap justify-center gap-5">
            <a href="#" className="hover:text-gold">Privacy</a>
            <a href="#" className="hover:text-gold">Terms</a>
            <a href="#" className="hover:text-gold">Cookies</a>
            <a href="/sitemap.xml" className="hover:text-gold">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
