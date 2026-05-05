import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Facebook, Instagram, Mail, Menu, Phone, Youtube, X } from "lucide-react";
import logo from "@/assets/brajmiles-logo.png";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Packages", to: "/packages" },
  { label: "Destinations", to: "/destinations" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Container-aware breakpoints — adapt to actual header width, not viewport.
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const w = entries[0].contentRect.width;
      setCollapsed(w < 720); // collapse to hamburger when too tight
      setCompact(w < 1024); // shrink text + hide phone label
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-soft border-b border-border"
          : "bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="bg-foreground text-background">
        <div className="container-pro flex h-9 items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-5">
            <a href="tel:+919027674560" className="flex items-center gap-2 transition-colors hover:text-gold">
              <Phone className="h-3.5 w-3.5" />
              <span>9027674560</span>
            </a>
            <a href="mailto:Brajmiles@gmail.com" className="hidden items-center gap-2 transition-colors hover:text-gold sm:flex">
              <Mail className="h-3.5 w-3.5" />
              <span>Brajmiles@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-background/80">
            <a href="https://www.facebook.com/share/1W12CYYc5B/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition-colors hover:text-gold">
              <Facebook className="h-3.5 w-3.5" />
            </a>
            <span className="text-background/30">|</span>
            <a href="https://www.instagram.com/brajmiles.in?igsh=MXZocmZqczNtaWNzNg%3D%3D" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-colors hover:text-gold">
              <Instagram className="h-3.5 w-3.5" />
            </a>
            <span className="text-background/30">|</span>
            <a href="https://youtube.com/@manojfojimathura?si=BdxT4eTL04A61s-T" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="transition-colors hover:text-gold">
              <Youtube className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      <div className="container-pro flex h-16 items-center justify-between gap-3 md:h-20">
        <Link to="/" className="flex shrink-0 items-center gap-2 min-w-0">
          <img
            src={logo}
            alt="Brajmiles.com logo"
            className="h-10 w-10 shrink-0 rounded-full object-cover shadow-soft md:h-12 md:w-12"
          />
          <div className="leading-tight min-w-0">
            <div className="font-display text-sm font-bold text-foreground md:text-base truncate">
              Brajmiles.com
            </div>
          </div>
        </Link>

        {!collapsed && (
          <nav
            className={`flex min-w-0 flex-1 items-center justify-center ${
              compact ? "gap-3" : "gap-6 xl:gap-8"
            }`}
          >
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className={`whitespace-nowrap font-medium text-foreground transition-colors hover:text-brand ${
                  compact ? "text-xs" : "text-sm"
                }`}
                activeProps={{ className: "text-brand" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        )}

        {!collapsed && (
          <div className="flex shrink-0 items-center gap-3">
            <a
              href="tel:+917552421243"
              className={`inline-flex items-center gap-2 rounded-full bg-gradient-brand font-semibold text-brand-foreground shadow-soft transition-transform hover:-translate-y-0.5 ${
                compact ? "px-3 py-2 text-xs" : "px-5 py-2.5 text-sm"
              }`}
            >
              <Phone className="h-4 w-4" />
              {!compact && <span>+91 75524 21243</span>}
            </a>
          </div>
        )}

        {collapsed && (
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="text-foreground"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        )}
      </div>

      {collapsed && open && (
        <div className="border-t border-border bg-background/95 backdrop-blur">
          <div className="container-pro flex flex-col gap-1 py-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-accent"
              >
                {n.label}
              </Link>
            ))}
            <a
              href="tel:+917552421243"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-brand-foreground"
            >
              <Phone className="h-4 w-4" /> +91 75524 21243
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
