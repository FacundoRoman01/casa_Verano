import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Se activa el modo "scrolled" al superar los 50px
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false); // Cierra el menú móvil al navegar
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        // Transición de color: Fondo transparente al inicio, fondo semi-opaco al hacer scroll
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("inicio")}
            className="text-xl font-serif font-semibold tracking-wide hover:opacity-80 transition-opacity"
          >
            <span className={isScrolled ? "text-foreground" : "text-white drop-shadow-sm"}>
              Casas de Verano
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["Inicio", "Alojamientos", "Ubicación", "Políticas", "Contacto"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  // Color de texto dinámico
                  isScrolled ? "text-foreground" : "text-white drop-shadow-sm"
                }`}
              >
                {item}
              </button>
            ))}
            
            {/* Botón de Reservar mejorado */}
            <Button
              onClick={() => scrollToSection("contacto")}
              size="sm"
              className={`
                font-semibold 
                transition-all duration-300 
                ${
                  isScrolled
                    ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                    : "bg-white/90 text-foreground border-2 border-white/0 hover:bg-white" 
                }
              `}
            >
              Reservar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${isScrolled ? "text-foreground" : "text-white"}`}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Se despliega */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-background border-t border-border shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {["Inicio", "Alojamientos", "Ubicación", "Políticas", "Contacto"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
              >
                {item}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contacto")}
              variant="default"
              className="w-full mt-2"
            >
              Reservar
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;