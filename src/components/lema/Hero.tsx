import { motion } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_URL =
  "https://wa.me/5511947944265?text=Olá%20preciso%20tirar%20duvidas%20e%20fazer%20um%20orçamento";

export default function Hero() {
  const scrollToNext = () => {
    const el = document.querySelector("#nossa_historia");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden="true"
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden="true"
      />

      {/* Animated glass shards decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[10%] w-32 h-32 md:w-48 md:h-48 rounded-2xl border border-white/10 glass-card opacity-30"
        />
        <motion.div
          animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[25%] left-[8%] w-24 h-24 md:w-40 md:h-40 rounded-2xl border border-white/10 glass-card opacity-20"
        />
        <motion.div
          animate={{ y: [-5, 15, -5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] left-[15%] w-16 h-16 md:w-24 md:h-24 rounded-full border border-accent/20 glass-card opacity-25"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/40 bg-accent/10 backdrop-blur-sm mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-accent badge-live" />
          <span className="text-accent font-inter font-medium text-sm tracking-wide">
            Vidraçaria Premium desde 1999
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="text-hero text-white mb-6 max-w-4xl mx-auto"
        >
          Transformando{" "}
          <span className="text-accent">Espaços</span>,{" "}
          Realizando{" "}
          <span className="relative inline-block">
            Sonhos
            <motion.span
              className="absolute -bottom-1 left-0 right-0 h-1 rounded-full"
              style={{ background: "var(--gradient-cta)" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-subtitle text-white/80 mb-10 max-w-2xl mx-auto"
        >
          Mais de 25 anos de excelência em vidraçaria. Qualidade, preço justo e luxo acessível
          para transformar cada ambiente com elegância e segurança.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp flex items-center gap-3 text-base w-full sm:w-auto justify-center"
          >
            <MessageCircle size={22} />
            Orçamento Instantâneo via WhatsApp
          </a>
          <button
            onClick={() => {
              const el = document.querySelector("#servicos");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary flex items-center gap-2 text-base text-white w-full sm:w-auto justify-center"
          >
            Ver Nossos Serviços
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-wrap justify-center gap-8 mt-16"
        >
          {[
            { value: "25+", label: "Anos de Experiência" },
            { value: "5.000+", label: "Clientes Atendidos" },
            { value: "100%", label: "Satisfação Garantida" },
          ].map((stat) => (
            <div key={stat.label} className="glass-card rounded-2xl px-6 py-4 text-center min-w-[140px]">
              <div className="font-montserrat font-800 text-3xl text-accent">{stat.value}</div>
              <div className="text-white/70 text-sm font-inter mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.5 }, y: { repeat: Infinity, duration: 2, ease: "easeInOut" } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-accent transition-colors"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
}
