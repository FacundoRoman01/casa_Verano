import { MapPin, TreePine, Dumbbell, ShoppingBag, Utensils, Waves } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Location = () => {
  const features = [
    {
      icon: <TreePine size={24} />,
      title: "Zona Natural",
      description: "Rodeado de bosque y vegetación",
    },
    {
      icon: <Waves size={24} />,
      title: "Cerca de la Playa",
      description: "A 5 minutos en auto",
    },
    {
      icon: <Dumbbell size={24} />,
      title: "Actividades Deportivas",
      description: "Gimnasio, pádel y fútbol cerca",
    },
    {
      icon: <ShoppingBag size={24} />,
      title: "Supermercados",
      description: "Comercios a minutos",
    },
    {
      icon: <Utensils size={24} />,
      title: "Gastronomía",
      description: "Bares y restaurantes cercanos",
    },
    {
      icon: <MapPin size={24} />,
      title: "Ubicación Segura",
      description: "Barrio residencial tranquilo",
    },
  ];

  return (
    <section id="ubicación" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-4">
            Ubicación 
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            De la Albacora 1859, Pinamar
          </p>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            Un barrio residencial tranquilo, entre calles Apolo y Juno. 
            Rodeado de naturaleza y a minutos de todos los servicios que necesitas.
          </p>
        </div>

        {/* Características del Entorno */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="text-primary">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mapa de Google Maps Insertado */}
        <div className="rounded-lg overflow-hidden shadow-xl h-96">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3182.1834212574927!2d-56.87037660000001!3d-37.1007511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959c9cd72913a455%3A0xffbc446f1cc9d252!2sDe%20la%20Albacora%201859%2C%20B7167%20Pinamar%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1762283770808!5m2!1ses!2sar" 
            width="100%" // Cambiado a 100% para responsividad
            height="100%" // Cambiado a 100% para llenar el div contenedor (h-96)
            style={{ border: 0 }} // Usamos style object en React
            // allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de nuestro alojamiento en Pinamar" // Título para accesibilidad
          ></iframe>
        </div>
        
      </div>
    </section>
  );
};

export default Location;