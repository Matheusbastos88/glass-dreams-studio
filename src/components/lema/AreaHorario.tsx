import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, Phone, CheckCircle2 } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5511947944265?text=Olá%20preciso%20tirar%20duvidas%20e%20fazer%20um%20orçamento";

const areas = [
  "Santo André", "São Bernardo do Campo", "São Caetano do Sul",
  "Diadema", "Mauá", "Ribeirão Pires", "Rio Grande da Serra",
  "São Paulo (Grande SP)", "ABC Paulista",
];

const schedule = [
  { day: "Segunda a Sexta", hours: "08:00 – 17:00" },
  { day: "Sábado", hours: "08:00 – 12:00" },
  { day: "Domingo e Feriados", hours: "Fechado" },
];

export default function AreaHorario() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const now = new Date();
  const dayOfWeek = now.getDay(); // 0=Sun
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = hours * 60 + minutes;

  let isOpen = false;
  let statusText = "Fechado agora";
  if (dayOfWeek >= 1 && dayOfWeek <= 5 && currentTime >= 8 * 60 && currentTime < 17 * 60) {
    isOpen = true;
    statusText = "Aberto agora até as 17:00";
  } else if (dayOfWeek === 6 && currentTime >= 8 * 60 && currentTime < 12 * 60) {
    isOpen = true;
    statusText = "Aberto agora até as 12:00";
  }

  return (
    <section id="area_e_horario" className="py-24 bg-gradient-section" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-divider mx-auto mb-6" />
          <h2 className="text-section-title text-primary mb-4">Área de Atendimento</h2>
          <p className="text-subtitle text-muted-foreground max-w-xl mx-auto">
            Atendemos toda a Grande São Paulo e ABC Paulista com qualidade e pontualidade.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Area Coverage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-card-light rounded-2xl p-8 border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
                <MapPin size={22} className="text-white" />
              </div>
              <h3 className="font-montserrat font-700 text-primary text-xl">Regiões Atendidas</h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {areas.map((area) => (
                <div key={area} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 size={14} className="text-accent flex-shrink-0" />
                  {area}
                </div>
              ))}
            </div>
            <a
              href="https://maps.google.com/?q=R.+Gastão+Vidigal,+20+Santo+André+SP"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 btn-primary inline-flex items-center gap-2 text-sm text-white"
            >
              <MapPin size={16} />
              Ver no Google Maps
            </a>
          </motion.div>

          {/* Schedule */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="glass-card-light rounded-2xl p-8 border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
                <Clock size={22} className="text-white" />
              </div>
              <h3 className="font-montserrat font-700 text-primary text-xl">Horário de Funcionamento</h3>
            </div>

            {/* Live status badge */}
            <div
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 text-sm font-montserrat font-600 ${
                isOpen
                  ? "bg-green-100 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-600 border border-red-100"
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${isOpen ? "bg-green-500 badge-live" : "bg-red-400"}`} />
              {statusText}
            </div>

            <div className="space-y-4">
              {schedule.map((item) => (
                <div key={item.day} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                  <span className="text-sm font-inter text-foreground font-medium">{item.day}</span>
                  <span className={`text-sm font-montserrat font-700 ${item.hours === "Fechado" ? "text-muted-foreground" : "text-accent"}`}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 btn-whatsapp inline-flex items-center gap-2 text-sm w-full justify-center"
            >
              <Phone size={16} />
              Falar no WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
