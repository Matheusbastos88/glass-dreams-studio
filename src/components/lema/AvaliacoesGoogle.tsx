import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, ExternalLink, BadgeCheck } from "lucide-react";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=lema+vidros+santo+andr%C3%A9+avalia%C3%A7%C3%B5es#lrd=0x94ce5c59f8c4c7c7:0x1,1";

const reviews = [
  {
    name: "Marcos Andrade",
    initials: "MA",
    rating: 5,
    date: "há 2 semanas",
    text: "Excelente atendimento e serviço impecável! O Alberto é muito profissional, fez o box do meu banheiro sob medida e ficou perfeito. Prazo cumprido e instalação caprichada. Super recomendo!",
    color: "hsl(215 80% 40%)",
  },
  {
    name: "Fernanda Ribeiro",
    initials: "FR",
    rating: 5,
    date: "há 1 mês",
    text: "Contratei para instalar espelho na sala e um box novo. O resultado superou minhas expectativas. Material de ótima qualidade, equipe educada e pontual. Preço justo para o serviço entregue!",
    color: "hsl(320 60% 45%)",
  },
  {
    name: "Paulo Henrique Santos",
    initials: "PH",
    rating: 5,
    date: "há 1 mês",
    text: "Já é a segunda vez que uso os serviços da Lema Vidros. Empresa séria, com mais de 20 anos de mercado e isso se reflete na qualidade. Box do banheiro ficou incrível. Recomendo a todos!",
    color: "hsl(160 60% 35%)",
  },
  {
    name: "Carla Mendes",
    initials: "CM",
    rating: 5,
    date: "há 2 meses",
    text: "Precisava de um espelho grande para minha academia em casa e a Lema Vidros me atendeu muito bem. Foram pontuais, fizeram tudo certinho e o resultado ficou lindo. Nota 10!",
    color: "hsl(30 80% 45%)",
  },
  {
    name: "Roberto Cunha",
    initials: "RC",
    rating: 5,
    date: "há 2 meses",
    text: "Serviço de manutenção do meu box antigo: limparam, trocaram borrachas e ajustaram dobradiças. Ficou como novo! Preço honesto e atendimento muito atencioso. Empresa que eu indico sem hesitar.",
    color: "hsl(270 55% 45%)",
  },
  {
    name: "Juliana Costa",
    initials: "JC",
    rating: 5,
    date: "há 3 meses",
    text: "Fiz um box e dois espelhos. O acabamento é impecável, percebe-se que usam materiais de qualidade. O prazo foi respeitado e a instalação foi feita com muito cuidado. Ficarei cliente para sempre!",
    color: "hsl(190 70% 38%)",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={15}
          className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-white/20"}
        />
      ))}
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-label="Google" role="img">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

export default function AvaliacoesGoogle() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragX = useMotionValue(0);

  const visibleCount = 3; // desktop: 3, mobile handled via CSS
  const total = reviews.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(next, 5500);
    return () => clearInterval(interval);
  }, []);

  // Drag / swipe
  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    if (info.offset.x < -50) next();
    else if (info.offset.x > 50) prev();
    setIsDragging(false);
  };

  const getVisibleIndexes = () => {
    return Array.from({ length: visibleCount }, (_, i) => (current + i) % total);
  };

  return (
    <section
      id="avaliacoes"
      className="py-24 relative overflow-hidden"
      style={{ background: "var(--gradient-section)" }}
      ref={ref}
    >
      {/* Background decorative blobs */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: "hsl(var(--accent))" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-8 pointer-events-none"
        style={{ background: "hsl(var(--primary))" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="section-divider mx-auto mb-6" />
          <h2 className="text-section-title mb-3" style={{ color: "hsl(var(--primary))" }}>
            Excelência Comprovada no Google
          </h2>
          <p className="text-subtitle max-w-xl mx-auto" style={{ color: "hsl(var(--muted-foreground))" }}>
            Mais de 25 anos cuidando de cada detalhe — e nossos clientes confirmam.
          </p>
        </motion.div>

        {/* Rating Summary Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card-light rounded-2xl p-7 flex flex-col sm:flex-row items-center justify-center gap-6 max-w-lg mx-auto mb-14 shadow-md"
        >
          {/* Google Icon + Rating */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 mb-1">
              <GoogleIcon />
              <span className="text-sm font-semibold" style={{ color: "hsl(var(--muted-foreground))" }}>
                Google Reviews
              </span>
            </div>
            <span
              className="text-6xl font-montserrat font-900 leading-none"
              style={{ color: "hsl(var(--primary))" }}
            >
              4.9
            </span>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-20 bg-border" />
          <div className="sm:hidden w-20 h-px bg-border" />

          {/* Stats */}
          <div className="text-center sm:text-left">
            <p className="text-3xl font-montserrat font-800" style={{ color: "hsl(var(--primary))" }}>
              +80
            </p>
            <p className="text-sm font-medium" style={{ color: "hsl(var(--muted-foreground))" }}>
              avaliações verificadas
            </p>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold transition-all hover:underline"
              style={{ color: "hsl(var(--accent))" }}
            >
              Ver todas no Google
              <ExternalLink size={12} />
            </a>
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          {/* Cards - Desktop shows 3, mobile shows 1 via overflow */}
          <div className="relative">
            {/* Mobile single-card swipe */}
            <div className="md:hidden overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.4 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  onDragStart={() => setIsDragging(true)}
                  onDragEnd={handleDragEnd}
                  style={{ x: dragX }}
                  className="cursor-grab active:cursor-grabbing"
                >
                  <ReviewCard review={reviews[current]} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Desktop 3-column grid */}
            <div className="hidden md:grid grid-cols-3 gap-5">
              <AnimatePresence mode="popLayout">
                {getVisibleIndexes().map((idx, pos) => (
                  <motion.div
                    key={`${idx}-${pos}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: pos * 0.08 }}
                  >
                    <ReviewCard review={reviews[idx]} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-5 mt-9">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all border"
              style={{
                background: "hsl(var(--muted))",
                borderColor: "hsl(var(--border))",
                color: "hsl(var(--primary))",
              }}
              aria-label="Avaliação anterior"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? "24px" : "8px",
                    height: "8px",
                    background:
                      i === current
                        ? "hsl(var(--accent))"
                        : "hsl(var(--border))",
                  }}
                  aria-label={`Ir para avaliação ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all border"
              style={{
                background: "hsl(var(--muted))",
                borderColor: "hsl(var(--border))",
                color: "hsl(var(--primary))",
              }}
              aria-label="Próxima avaliação"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10"
        >
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-montserrat font-700 text-sm transition-all hover:-translate-y-1 border"
            style={{
              background: "hsl(var(--primary))",
              color: "hsl(var(--primary-foreground))",
              borderColor: "transparent",
              boxShadow: "var(--shadow-md)",
            }}
          >
            <GoogleIcon />
            Ver todas as avaliações no Google
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Review Card Sub-component ─── */
function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <div
      className="glass-card-light rounded-2xl p-6 h-full flex flex-col gap-4 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1"
      style={{ boxShadow: "var(--shadow-sm)" }}
    >
      {/* Subtle top accent line */}
      <div
        className="absolute top-0 left-6 right-6 h-0.5 rounded-b-full opacity-60"
        style={{ background: "hsl(var(--accent))" }}
      />

      {/* Header: avatar + name + Google icon */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* Avatar circle with initials */}
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-montserrat font-700 flex-shrink-0"
            style={{ background: review.color }}
            aria-hidden="true"
          >
            {review.initials}
          </div>
          <div>
            <p className="font-montserrat font-700 text-sm leading-tight" style={{ color: "hsl(var(--foreground))" }}>
              {review.name}
            </p>
            <p className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
              {review.date}
            </p>
          </div>
        </div>
        <GoogleIcon />
      </div>

      {/* Stars */}
      <StarRating rating={review.rating} />

      {/* Review text */}
      <p
        className="text-sm leading-relaxed flex-1"
        style={{ color: "hsl(var(--muted-foreground))" }}
      >
        "{review.text}"
      </p>

      {/* Verified badge */}
      <div
        className="flex items-center gap-1.5 text-xs font-medium pt-2 border-t"
        style={{ borderColor: "hsl(var(--border))", color: "hsl(var(--accent))" }}
      >
        <BadgeCheck size={13} />
        Avaliação Verificada no Google
      </div>
    </div>
  );
}
