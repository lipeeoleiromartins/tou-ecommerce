import { Link } from "react-router-dom";
import { INSTAGRAM_URL, INSTAGRAM_HANDLE, WHATSAPP_DISPLAY, whatsappLink } from "../config/site";

export function Footer() {
  const whatsappMessage = "Olá! Gostaria de falar sobre os projetos da TOŪ.";

  return (
    <footer className="border-t border-border/50 bg-background py-16">
      <div className="container-wide grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Localização */}
        <div className="space-y-4">
          <p className="text-label">Localização</p>
          <p className="text-muted-foreground">
            São Paulo, SP<br />
            Brasil
          </p>
        </div>

        {/* Navegação */}
        <div className="space-y-4">
          <p className="text-label">Navegação</p>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <Link to="/work" className="hover:text-foreground transition-colors">
                Projetos
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-foreground transition-colors">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-foreground transition-colors">
                Contato
              </Link>
            </li>
          </ul>
        </div>

        {/* Redes & Contato */}
        <div className="space-y-4">
          <p className="text-label">Redes & Contato</p>
          <div className="space-y-2 text-muted-foreground">
            <p>
              Instagram{" "}
              <a 
                href={INSTAGRAM_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:underline ml-1"
              >
                {INSTAGRAM_HANDLE}
              </a>
            </p>
            <p>
              WhatsApp{" "}
              <a 
                href={whatsappLink(whatsappMessage)} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:underline ml-1"
              >
                {WHATSAPP_DISPLAY}
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="container-wide mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} TOŪ — Decoração e Arte. Todos os direitos reservados.</p>
        <p className="mt-4 md:mt-0 font-medium tracking-widest uppercase">Design & Art</p>
      </div>
    </footer>
  );
}