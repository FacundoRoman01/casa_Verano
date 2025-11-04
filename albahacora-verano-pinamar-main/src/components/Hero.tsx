import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/house-front.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Casas de Verano de la Albacora - Vista frontal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-4 tracking-wide">
            Casas de Verano de la Albacora
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto">
            Alojamientos independientes con parrilla privada y pileta en Pinamar
          </p>
          <p className="text-lg md:text-xl text-white/80 font-light">
            De la Albacora 1859 — A 5 minutos de la playa
          </p>
          <div className="pt-8">
            <Button
              onClick={() => scrollToSection("alojamientos")}
              size="lg"
              className="bg-white text-foreground hover:bg-white/90 text-lg px-8 py-6 rounded-full shadow-lg"
            >
              Ver Alojamientos
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("alojamientos")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
