import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Send } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5511947944265?text=Olá%20preciso%20tirar%20duvidas%20e%20fazer%20um%20orçamento";

const MAPS_URL = "https://maps.google.com/?q=R.+Gastão+Vidigal,+20,+Jardim+Bela+Vista,+Santo+André+-+SP";

export default function Contato() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ nome: "", telefone: "", servico: "", mensagem: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Me chamo ${form.nome}. Telefone: ${form.telefone}. Serviço: ${form.servico}. ${form.mensagem}`;
    window.open(`https://wa.me/5511947944265?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contato" className="py-24 bg-gradient-section" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-divider mx-auto mb-6" />
          <h2 className="text-section-title text-primary mb-4">Fale Conosco</h2>
          <p className="text-subtitle text-muted-foreground max-w-xl mx-auto">
            Pronto para transformar seu espaço? Entre em contato e receba um orçamento gratuito.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card-light rounded-2xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--gradient-primary)" }}>
                  <MapPin size={22} className="text-white" />
                </div>
                <div>
                  <h4 className="font-montserrat font-700 text-primary mb-1">Endereço</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    R. Gastão Vidigal, 20 - Matriz<br />
                    Jardim Bela Vista, Santo André - SP<br />
                    CEP: 09020-140
                  </p>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent text-sm font-medium hover:underline mt-2 inline-block"
                  >
                    Abrir Rota no Google Maps →
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card-light rounded-2xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--gradient-primary)" }}>
                  <Phone size={22} className="text-white" />
                </div>
                <div>
                  <h4 className="font-montserrat font-700 text-primary mb-1">Telefone / WhatsApp</h4>
                  <p className="text-muted-foreground text-sm">(11) 94794-4265</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp inline-flex items-center gap-2 text-sm mt-3 px-4 py-2.5"
                  >
                    <MessageCircle size={16} />
                    Abrir WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden border border-border h-48">
              <iframe
                title="Lema Vidros - Localização"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.3!2d-46.5356!3d-23.6565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sR.+Gast%C3%A3o+Vidigal%2C+20+Santo+Andr%C3%A9!5e0!3m2!1spt!2sbr!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="glass-card-light rounded-2xl p-8 border border-border"
          >
            <h3 className="font-montserrat font-700 text-primary text-xl mb-6">
              Solicitar Orçamento
            </h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-accent" style={{ background: "hsl(var(--accent) / 0.1)" }}>
                  <Send size={28} className="text-accent" />
                </div>
                <h4 className="font-montserrat font-700 text-primary text-lg mb-2">Mensagem Enviada!</h4>
                <p className="text-muted-foreground text-sm">Você será redirecionado ao WhatsApp para continuar.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Nome */}
                <div className="relative">
                  <input
                    type="text"
                    name="nome"
                    id="nome"
                    required
                    placeholder=" "
                    value={form.nome}
                    onChange={handleChange}
                    className="w-full border border-border rounded-xl px-4 pt-6 pb-2 text-foreground bg-background focus:outline-none focus:border-accent transition-colors text-sm peer"
                  />
                  <label
                    htmlFor="nome"
                    className="absolute left-4 top-4 text-muted-foreground text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-accent peer-[&:not(:placeholder-shown)]:top-1.5 peer-[&:not(:placeholder-shown)]:text-xs pointer-events-none"
                  >
                    Seu nome completo *
                  </label>
                </div>

                {/* Telefone */}
                <div className="relative">
                  <input
                    type="tel"
                    name="telefone"
                    id="telefone"
                    required
                    placeholder=" "
                    value={form.telefone}
                    onChange={handleChange}
                    className="w-full border border-border rounded-xl px-4 pt-6 pb-2 text-foreground bg-background focus:outline-none focus:border-accent transition-colors text-sm peer"
                  />
                  <label
                    htmlFor="telefone"
                    className="absolute left-4 top-4 text-muted-foreground text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-accent peer-[&:not(:placeholder-shown)]:top-1.5 peer-[&:not(:placeholder-shown)]:text-xs pointer-events-none"
                  >
                    Telefone / WhatsApp *
                  </label>
                </div>

                {/* Serviço */}
                <div>
                  <select
                    name="servico"
                    id="servico"
                    required
                    value={form.servico}
                    onChange={handleChange}
                    className="w-full border border-border rounded-xl px-4 py-3.5 text-foreground bg-background focus:outline-none focus:border-accent transition-colors text-sm"
                  >
                    <option value="">Selecione o serviço desejado *</option>
                    <option value="Box para Banheiro">Box para Banheiro</option>
                    <option value="Sacada ou Fachada">Sacada ou Fachada</option>
                    <option value="Espelho Decorativo">Espelho Decorativo</option>
                    <option value="Manutenção">Manutenção</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>

                {/* Mensagem */}
                <div className="relative">
                  <textarea
                    name="mensagem"
                    id="mensagem"
                    rows={4}
                    placeholder=" "
                    value={form.mensagem}
                    onChange={handleChange}
                    className="w-full border border-border rounded-xl px-4 pt-6 pb-2 text-foreground bg-background focus:outline-none focus:border-accent transition-colors text-sm resize-none peer"
                  />
                  <label
                    htmlFor="mensagem"
                    className="absolute left-4 top-4 text-muted-foreground text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-accent peer-[&:not(:placeholder-shown)]:top-1.5 peer-[&:not(:placeholder-shown)]:text-xs pointer-events-none"
                  >
                    Descreva seu projeto (opcional)
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn-whatsapp w-full flex items-center justify-center gap-3"
                >
                  <MessageCircle size={20} />
                  Enviar via WhatsApp
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
