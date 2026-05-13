import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import logo from "@/assets/brajmiles-logo.png";

const WHATSAPP_URL = "https://wa.me/919027674560";

const NAV = [
  { label: "Home", href: "/#top" },
  { label: "Packages", href: "/#packages" },
  { label: "Destinations", href: "/#destinations" },
  { label: "Services", href: "/#services" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: WHATSAPP_URL, external: true },
];

const PHONE_DISPLAY = "+91 90276 74560";
const PHONE_TEL = "tel:+919027674560";

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
      <div className="bg-foreground text-background overflow-hidden">
        <div className="flex h-9 items-center whitespace-nowrap text-xs font-semibold tracking-wide">
          <div className="flex shrink-0 animate-marquee gap-16 pr-16">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="flex items-center gap-3">
                <span className="text-gold">✦</span>
                Welcome to Braj Bhoomi
              </span>
            ))}
          </div>
          <div className="flex shrink-0 animate-marquee gap-16 pr-16" aria-hidden="true">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="flex items-center gap-3">
                <span className="text-gold">✦</span>
                Welcome to Braj Bhoomi
              </span>
            ))}
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
              <a
                key={n.label}
                href={n.href}
                {...(n.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={`whitespace-nowrap font-medium text-foreground transition-colors hover:text-brand ${
                  compact ? "text-xs" : "text-sm"
                }`}
              >
                {n.label}
              </a>
            ))}
          </nav>
        )}

        {!collapsed && (
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={PHONE_TEL}
              className={`inline-flex items-center gap-2 rounded-full bg-gradient-brand font-semibold text-brand-foreground shadow-soft transition-transform hover:-translate-y-0.5 ${
                compact ? "px-3 py-2 text-xs" : "px-5 py-2.5 text-sm"
              }`}
            >
              <Phone className="h-4 w-4" />
              {!compact && <span>{PHONE_DISPLAY}</span>}
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
              <a
                key={n.label}
                href={n.href}
                {...(n.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-accent"
              >
                {n.label}
              </a>
            ))}
            <div className="mt-2 flex gap-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-brand bg-background px-5 py-3 text-sm font-semibold text-brand"
              >
                <svg viewBox="0 0 32 32" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M19.11 17.27c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.83-2.01-.22-.53-.45-.46-.61-.46-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.11 2.81.14.18 1.92 2.93 4.65 4.11.65.28 1.16.45 1.55.58.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32zM16.02 5.33c-5.89 0-10.67 4.78-10.67 10.67 0 1.88.49 3.71 1.43 5.33L5.33 26.67l5.5-1.43a10.65 10.65 0 0 0 5.19 1.34h.01c5.88 0 10.66-4.78 10.66-10.67 0-2.85-1.11-5.53-3.12-7.55a10.6 10.6 0 0 0-7.55-3.13zm6.34 17.01a8.84 8.84 0 0 1-6.34 2.62h-.01a8.85 8.85 0 0 1-4.51-1.24l-.32-.19-3.27.85.87-3.18-.21-.33a8.85 8.85 0 0 1-1.36-4.71c0-4.9 3.99-8.88 8.89-8.88 2.37 0 4.6.93 6.28 2.61a8.82 8.82 0 0 1 2.6 6.28c-.01 4.9-4 8.88-8.92 8.88z"/>
                </svg>
                WhatsApp
              </a>
              <a
                href={PHONE_TEL}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-brand-foreground"
              >
                <Phone className="h-4 w-4" /> Call
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
