import { MessageCircle, MapPin, Phone, Instagram, Facebook } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5511947944265?text=Olá%20preciso%20tirar%20duvidas%20e%20fazer%20um%20orçamento";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "hsl(var(--deep-navy))" }} className="text-white">
      {/* Main footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent/40">
                <img src="/favicon.png" alt="Lema Vidros" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-montserrat font-800 text-xl">
                  LEMA<span className="text-accent"> VIDROS</span>
                </div>
                <div className="text-white/50 text-xs tracking-widest">DESDE 1999</div>
              </div>
            </div>
            <p className="text-white/65 text-sm leading-relaxed max-w-xs mb-6">
              Mais de 25 anos transformando espaços com qualidade, elegância e preço justo.
              Luxo acessível para todos em São Paulo e Grande ABC.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-montserrat font-700 text-white mb-5 text-sm tracking-wider uppercase">
              Navegação
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Início", href: "#inicio" },
                { label: "Nossa História", href: "#nossa_historia" },
                { label: "Serviços", href: "#servicos" },
                { label: "Galeria", href: "#galeria" },
                { label: "Contato", href: "#contato" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-white/60 hover:text-accent text-sm transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-montserrat font-700 text-white mb-5 text-sm tracking-wider uppercase">
              Contato
            </h4>
            <div className="space-y-4">
              <a href="tel:+5511947944265" className="flex items-start gap-3 group">
                <Phone size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm group-hover:text-accent transition-colors">
                  (11) 94794-4265
                </span>
              </a>
              <a
                href="https://maps.google.com/?q=R.+Gastão+Vidigal,+20+Santo+André+SP"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <MapPin size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm group-hover:text-accent transition-colors">
                  R. Gastão Vidigal, 20<br />
                  Santo André - SP
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {year} Lema Vidros. Todos os direitos reservados.
          </p>
          <p className="text-white/30 text-xs">
            Fundada por Alberto Leonardo Pimpão em 1999
          </p>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-brand-glow animate-float"
        style={{ background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)" }}
        aria-label="WhatsApp - Orçamento"
      >
        <MessageCircle size={26} className="text-white" />
      </a>
    </footer>
  );
}
