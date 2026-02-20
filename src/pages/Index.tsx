import Navbar from "@/components/lema/Navbar";
import Hero from "@/components/lema/Hero";
import NossaHistoria from "@/components/lema/NossaHistoria";
import Servicos from "@/components/lema/Servicos";
import AreaHorario from "@/components/lema/AreaHorario";
import Galeria from "@/components/lema/Galeria";
import AvaliacoesGoogle from "@/components/lema/AvaliacoesGoogle";
import Contato from "@/components/lema/Contato";
import Footer from "@/components/lema/Footer";

const Index = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <NossaHistoria />
      <Servicos />
      <AreaHorario />
      <Galeria />
      <AvaliacoesGoogle />
      <Contato />
      <Footer />
    </main>
  );
};

export default Index;
