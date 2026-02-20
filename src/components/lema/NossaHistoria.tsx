import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Heart, Users, Star } from "lucide-react";

const timelineItems = [
  {
    year: "1999",
    title: "O Início de um Sonho",
    text: "Alberto Leonardo Pimpão funda a Lema Vidros em Santo André, com a missão de oferecer qualidade premium a preços acessíveis para todos.",
  },
  {
    year: "2005",
    title: "Expansão e Reconhecimento",
    text: "Ampliamos nossa área de atendimento para toda a Grande São Paulo e ABC Paulista, consolidando nossa reputação de excelência.",
  },
  {
    year: "2012",
    title: "Inovação em Serviços",
    text: "Incorporamos novas técnicas de instalação e ampliamos o portfólio com sacadas de vidro e fachadas comerciais de alto padrão.",
  },
  {
    year: "2024",
    title: "25 Anos de Excelência",
    text: "Celebramos um quarto de século transformando espaços e realizando sonhos, com milhares de clientes satisfeitos e projetos entregues.",
  },
];

const values = [
  { icon: Award, label: "Qualidade Premium", desc: "Materiais de primeira linha e acabamento impecável em cada projeto" },
  { icon: Heart, label: "Inclusão Social", desc: "Luxo acessível para todos os perfis de clientes e orçamentos" },
  { icon: Users, label: "Atendimento Personalizado", desc: "Cada cliente recebe atenção exclusiva do início ao fim do projeto" },
  { icon: Star, label: "Excelência Comprovada", desc: "Mais de 25 anos de reputação e confiança no mercado" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function NossaHistoria() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="nossa_historia" className="py-24 bg-gradient-section" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-divider mx-auto mb-6" />
          <h2 className="text-section-title text-primary mb-4">Nossa História</h2>
          <p className="text-subtitle text-muted-foreground max-w-2xl mx-auto">
            Fundada por Alberto Leonardo Pimpão, a Lema Vidros nasceu da paixão por transformar
            espaços com elegância e tornar o luxo acessível a todos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Timeline */}
          <div className="space-y-8">
            {timelineItems.map((item, i) => (
              <motion.div
                key={item.year}
                variants={fadeInUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.6, delay: 0.15 * i }}
                className="timeline-item"
              >
                <div className="timeline-dot" />
                <div className="glass-card-light rounded-xl p-5 ml-4 border border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-montserrat font-800 text-2xl text-accent">{item.year}</span>
                    <span className="h-px flex-1 bg-gradient-cta opacity-30" />
                  </div>
                  <h3 className="font-montserrat font-700 text-lg text-primary mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.label}
                  variants={fadeInUp}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
                  className="service-card glass-card-light rounded-2xl p-6 border border-border"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    <Icon size={24} className="text-white" />
                  </div>
                  <h4 className="font-montserrat font-700 text-primary text-base mb-2">{v.label}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}

            {/* Founder quote */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="sm:col-span-2 rounded-2xl p-6 border border-accent/30"
              style={{ background: "var(--gradient-primary)" }}
            >
              <blockquote className="text-white/90 text-sm italic leading-relaxed mb-3">
                "Nossa missão sempre foi clara: oferecer o melhor em vidraçaria com preço justo,
                porque todo cliente merece qualidade e elegância em seu lar."
              </blockquote>
              <cite className="text-accent font-montserrat font-600 text-sm not-italic">
                — Alberto Leonardo Pimpão, Fundador
              </cite>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
