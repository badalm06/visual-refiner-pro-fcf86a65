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
        scrolled ? "bg-background/90 backdrop-blur-md shadow-soft border-b border-border" : "bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="container-pro flex h-16 items-center justify-between gap-4 md:h-20">
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <img src={logo} alt="Brajmiles.com logo" className="h-10 w-10 rounded-full object-cover shadow-soft md:h-12 md:w-12" />
          <div className="leading-tight">
            <div className="font-display text-sm font-bold text-foreground md:text-base">
              Brajmiles.com
            </div>
          </div>
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-6 lg:flex xl:gap-8">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="whitespace-nowrap text-sm font-medium text-foreground transition-colors hover:text-brand"
              activeProps={{ className: "text-brand" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <a
            href="tel:+917552421243"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-4 py-2 text-sm font-semibold text-brand-foreground shadow-soft transition-transform hover:-translate-y-0.5 xl:px-5 xl:py-2.5"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden xl:inline">+91 75524 21243</span>
            <span className="xl:hidden">Call</span>
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="text-foreground lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur lg:hidden">
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
