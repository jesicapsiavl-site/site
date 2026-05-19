import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import logo from "@/assets/LOGO2.png";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <img src={logo} alt="Jessica Schneider — Psicóloga" className="h-24 w-auto" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-foreground/75">
              Psicoterapia com base na ciência, acolhimento e escuta ativa.
              Atendimento presencial em Angra dos Reis e online para todo o Brasil.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Navegue
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link to="/" className="hover:text-cocoa">Início</Link></li>
              <li><Link to="/sobre" className="hover:text-cocoa">Sobre</Link></li>
              <li><Link to="/terapia-online" className="hover:text-cocoa">Terapia Online</Link></li>
              <li><Link to="/blog" className="hover:text-cocoa">Blog</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Contato
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-cocoa">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-cocoa">
                  Instagram
                </a>
              </li>
              <li>
                <a href={SITE.maps} target="_blank" rel="noopener noreferrer" className="hover:text-cocoa">
                  Angra dos Reis · Mapa
                </a>
              </li>
              <li>
                <a href={SITE.ebook} target="_blank" rel="noopener noreferrer" className="hover:text-cocoa">
                  E-book gratuito
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border/70 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Jessica Schneider · Todos os direitos reservados</p>
          <p>CRP 05/86249 · Psicologia baseada em evidências</p>
        </div>
      </div>
    </footer>
  );
}
