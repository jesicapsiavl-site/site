import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { WhatsAppButton } from "./WhatsAppButton";
import { SITE } from "@/lib/site";
import logo from "@/assets/LOGO3.png";

const nav = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/terapia-online", label: "Terapia Online" },
  { to: "/blog", label: "Blog" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
          <Link to="/" className="group flex items-center" aria-label="Jessica Schneider — Psicóloga">
          <img
            src={logo}
            alt="Jessica Schneider — Psicóloga"
            className="h-16 w-auto md:h-20"
            loading="eager"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item, index) => (
            <div key={item.to} className="flex items-center gap-6">
              <Link
                to={item.to}
                className="font-serif text-base md:text-lg tracking-normal text-foreground/80 transition-colors hover:text-cocoa"
                activeProps={{ className: "text-cocoa" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
              {index < nav.length - 1 && (
                <div className="h-1 w-1 rounded-full bg-foreground/40" />
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-primary hover:text-cocoa md:inline-flex"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
            </svg>
          </a>
          <WhatsAppButton label="Agendar" size="lg" className="hidden sm:inline-flex" />
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border text-foreground/70 lg:hidden"
            aria-label="Menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <><path d="M4 7h16M4 12h16M4 17h16" /></>}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="font-serif rounded-md px-5 py-4 text-lg text-foreground/85 hover:bg-secondary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
