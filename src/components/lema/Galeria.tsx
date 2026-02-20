import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

const galleryItems = [
  { src: gallery1, alt: "Box de banheiro em vidro temperado premium", category: "banheiros", label: "Box para Banheiro" },
  { src: gallery2, alt: "Sacada com guarda-corpo em vidro panorâmico", category: "sacadas", label: "Sacada Panorâmica" },
  { src: gallery3, alt: "Espelho decorativo em sala de estar", category: "espelhos", label: "Espelho Decorativo" },
  { src: gallery4, alt: "Fachada comercial em vidro azul", category: "sacadas", label: "Fachada Comercial" },
  { src: gallery5, alt: "Divisória de escritório em vidro", category: "banheiros", label: "Divisória Office" },
];

const filters = [
  { label: "Todos", value: "all" },
  { label: "Banheiros", value: "banheiros" },
  { label: "Sacadas", value: "sacadas" },
  { label: "Espelhos", value: "espelhos" },
];

export default function Galeria() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeFilter === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null));
  const nextImage = () => setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null));

  return (
    <section id="galeria" className="py-24" style={{ background: "hsl(var(--primary))" }} ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="section-divider mx-auto mb-6" />
          <h2 className="text-section-title text-white mb-4">Nosso Portfólio</h2>
          <p className="text-subtitle text-white/70 max-w-xl mx-auto">
            Cada projeto é único. Conheça alguns dos trabalhos que transformaram espaços e realizaram sonhos.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-5 py-2.5 rounded-full text-sm font-montserrat font-600 transition-all duration-300 min-h-[44px] ${
                activeFilter === f.value
                  ? "bg-accent text-deep-navy shadow-brand-glow"
                  : "border border-white/20 text-white/80 hover:border-accent/50 hover:text-accent glass-card"
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="gallery-item"
                onClick={() => openLightbox(i)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-white font-montserrat font-600 text-sm">{item.label}</span>
                    <ZoomIn size={20} className="text-accent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-deep-navy/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                className="w-full rounded-2xl object-cover max-h-[80vh]"
              />
              <div className="absolute bottom-0 left-0 right-0 rounded-b-2xl px-6 py-4"
                style={{ background: "var(--gradient-hero)" }}>
                <p className="text-white font-montserrat font-600">{filtered[lightboxIndex].label}</p>
              </div>

              {/* Controls */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 w-10 h-10 rounded-full glass-card flex items-center justify-center text-white hover:text-accent transition-colors"
                aria-label="Fechar"
              >
                <X size={20} />
              </button>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-card flex items-center justify-center text-white hover:text-accent transition-colors"
                aria-label="Anterior"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-card flex items-center justify-center text-white hover:text-accent transition-colors"
                aria-label="Próxima"
              >
                <ChevronRight size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
