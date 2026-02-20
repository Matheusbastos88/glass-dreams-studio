import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Square, Building2, Sparkles, Wrench, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5511947944265?text=Olá%20preciso%20tirar%20duvidas%20e%20fazer%20um%20orçamento";

const services = [
  {
    icon: Square,
    title: "Box para Banheiro",
    description:
      "Elegância e segurança no seu banheiro. Box em vidro temperado com perfis em alumínio de alta qualidade, modelos sob medida.",
    highlight: "Mais Vendido",
    features: ["Vidro temperado 8mm", "Perfis em alumínio", "Sob medida", "Instalação inclusa"],
  },
  {
    icon: Building2,
    title: "Sacadas e Fachadas",
    description:
      "Visão panorâmica sem limites. Guarda-corpos e fachadas em vidro frameless para uma estética moderna e sofisticada.",
    highlight: "Premium",
    features: ["Vidro laminado", "Sem perfis visíveis", "Alta segurança", "Projeto personalizado"],
  },
  {
    icon: Sparkles,
    title: "Espelhos Decorativos",
    description:
      "Amplitude e sofisticação. Espelhos sob medida para sala, quarto, banheiro e ambientes corporativos.",
    highlight: "Design",
    features: ["Vários acabamentos", "Espelho bisotado", "Com moldura", "Entrega e instalação"],
  },
  {
    icon: Wrench,
    title: "Manutenção Especializada",
    description:
      "O cuidado que seu vidro merece. Reparos, ajustes, substituição de borrachas e revisão completa de esquadrias.",
    highlight: "Confiança",
    features: ["Diagnóstico grátis", "Peças originais", "Rapidez no atendimento", "Garantia do serviço"],
  },
];

// Using inline custom variant rendering to avoid TS issues with custom function variants


export default function Servicos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="servicos"
      className="py-24"
      style={{ background: "hsl(var(--primary))" }}
      ref={ref}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-divider mx-auto mb-6" />
          <h2 className="text-section-title text-white mb-4">O Que Fazemos</h2>
          <p className="text-subtitle text-white/70 max-w-2xl mx-auto">
            Soluções completas em vidro para transformar qualquer ambiente com elegância,
            segurança e acabamento de alto padrão.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="service-card glass-card rounded-2xl p-6 relative overflow-hidden group"
              >
                {/* Highlight Badge */}
                <span className="absolute top-4 right-4 text-[10px] font-montserrat font-700 text-accent border border-accent/30 rounded-full px-2 py-0.5 bg-accent/10">
                  {service.highlight}
                </span>

                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: "radial-gradient(circle at 50% 0%, hsl(200 90% 55% / 0.08), transparent 70%)" }}
                />

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "var(--gradient-cta)" }}
                >
                  <Icon size={26} className="text-deep-navy" />
                </div>

                <h3 className="font-montserrat font-700 text-white text-lg mb-3">{service.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed mb-5">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-xs text-white/60">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: "hsl(var(--accent))" }}
                      />
                      {feat}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-center mt-14"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center gap-3 text-base"
          >
            <MessageCircle size={22} />
            Solicitar Orçamento Grátis
          </a>
        </motion.div>
      </div>
    </section>
  );
}
