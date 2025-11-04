const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-serif mb-4">Casas de Verano de la Albacora</h3>
            <p className="text-background/80 text-sm">
              Alojamientos vacacionales en Pinamar con todas las comodidades para tus vacaciones perfectas.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#inicio" className="text-background/80 hover:text-background transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#alojamientos" className="text-background/80 hover:text-background transition-colors">
                  Alojamientos
                </a>
              </li>
              <li>
                <a href="#ubicación" className="text-background/80 hover:text-background transition-colors">
                  Ubicación
                </a>
              </li>
              <li>
                <a href="#políticas" className="text-background/80 hover:text-background transition-colors">
                  Políticas
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-background/80 hover:text-background transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>De la Albacora 1859</li>
              <li>Pinamar, Buenos Aires</li>
              <li className="mt-4">A 5 minutos de la playa</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-sm text-background/80">
            © {new Date().getFullYear()} Casas de Verano de la Albacora. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
