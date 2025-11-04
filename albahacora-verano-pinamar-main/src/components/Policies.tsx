import { Shield, Users, Volume2, Home, DollarSign, PawPrint } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Policies = () => {
  const policies = [
    {
      icon: <Home size={24} />,
      title: "Uso Vacacional",
      description: "Los alojamientos son exclusivamente para fines vacacionales y descanso familiar.",
    },
    {
      icon: <Users size={24} />,
      title: "No Fiestas",
      description: "No se permiten fiestas, reuniones grandes ni subarriendos de ningún tipo.",
    },
    {
      icon: <Volume2 size={24} />,
      title: "Respeto al Entorno",
      description: "Mantenemos un ambiente tranquilo. Se solicita ruido moderado y respeto por los vecinos.",
    },
    {
      icon: <DollarSign size={24} />,
      title: "Depósito de Seguridad",
      description: "Se solicita depósito de seguridad que será devuelto al finalizar la estadía.",
    },
    {
      icon: <Shield size={24} />,
      title: "Zona Segura",
      description: "Barrio residencial muy seguro con vigilancia y tranquilidad garantizada.",
    },
    {
      icon: <PawPrint size={24} />,
      title: "Mascotas",
      description: "No se aceptan mascotas. Consultar casos excepcionales.",
    },
  ];

  return (
    <section id="políticas" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-4">
            Normas del Lugar
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Para garantizar una experiencia agradable para todos nuestros huéspedes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {policies.map((policy, index) => (
            <Card key={index} className="border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="text-accent">{policy.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{policy.title}</h3>
                    <p className="text-muted-foreground text-sm">{policy.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Policies;
