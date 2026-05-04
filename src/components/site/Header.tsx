import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container-pro flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Brajmiles.com logo" className="h-12 w-12 rounded-full object-cover shadow-soft" />
          <div className="leading-tight">
            <div className={`font-display text-base font-bold ${scrolled ? "text-foreground" : "text-white"}`}>
              brajmiles.com
            </div>
            <div className={`text-[10px] uppercase tracking-[0.2em] ${scrolled ? "text-muted-foreground" : "text-white/80"}`}>
              &nbsp;
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={`text-sm font-medium transition-colors hover:text-brand ${
                scrolled ? "text-foreground" : "text-white"
              }`}
              activeProps={{ className: "text-brand" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+917552421243"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            <Phone className="h-4 w-4" />
            +91 75524 21243
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden ${scrolled ? "text-foreground" : "text-white"}`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur md:hidden">
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
              <Phone className="h-4 w-4" /> Call Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
