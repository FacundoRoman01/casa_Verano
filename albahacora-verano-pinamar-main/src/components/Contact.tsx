import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

// Números de teléfono
const WHATSAPP_NUMBER_1 = "+54 9 2254 41-9915";
const WHATSAPP_LINK_1 = "https://wa.me/5492254419915"; // Para el enlace, sin '+' ni '-'

const WHATSAPP_NUMBER_2 = "+54 9 2254 44-2728";
const WHATSAPP_LINK_2 = "https://wa.me/5492254442728"; // Para el enlace, sin '+' ni '-'

const Contact = () => {
  return (
    <section id="contacto" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-4">
            Reservá tu Estadía
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Contactanos para consultar disponibilidad y tarifas
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tarjeta de Teléfono */}
          <Card className="border-border/50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Teléfono</h3>
                  <p className="text-muted-foreground mb-2">Consultá por WhatsApp o llamada:</p>
                  <p className="font-medium text-foreground">{WHATSAPP_NUMBER_1}</p>
                  <p className="font-medium text-foreground mb-4">{WHATSAPP_NUMBER_2}</p>
                  {/* <a href={`tel:${WHATSAPP_NUMBER_1.replace(/\s|-/g, '')}`} target="_blank" rel="noopener noreferrer">
                    <Button variant="link" className="px-0 mt-2 text-primary">
                      Llamar a {WHATSAPP_NUMBER_1}
                    </Button>
                  </a> */}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tarjeta de Email (sin cambios) */}
          {/* <Card className="border-border/50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <p className="text-muted-foreground">Envianos tu consulta por correo</p>
                  <Button variant="link" className="px-0 mt-2 text-primary">
                    Escribir
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card> */}

          {/* Tarjeta de Dirección (sin cambios) */}
          <Card className="border-border/50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Dirección</h3>
                  <p className="text-muted-foreground">
                    De la Albacora 1859<br />
                    Pinamar, Buenos Aires
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tarjeta de WhatsApp (actualizada) */}
          <Card className="border-border/50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="text-primary">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
                  <p className="text-muted-foreground mb-4">Respuesta rápida por mensaje a cualquiera de los números:</p>
                  {/* <p className="font-medium text-foreground">{WHATSAPP_NUMBER_1}</p>
                  <p className="font-medium text-foreground mb-2">{WHATSAPP_NUMBER_2}</p> */}
                  
                  <a href={WHATSAPP_LINK_1} target="_blank" rel="noopener noreferrer">
                    <Button variant="link" className="px-0 mt-2 mr-4 text-primary">
                      Chatear {WHATSAPP_NUMBER_1}
                    </Button>
                  </a>
                  <a href={WHATSAPP_LINK_2} target="_blank" rel="noopener noreferrer">
                    <Button variant="link" className="px-0 mt-2 text-primary">
                      Chatear {WHATSAPP_NUMBER_2}
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          {/* Podrías enlazar este botón a un formulario de contacto más detallado o a uno de los WhatsApp */}
          <a href={WHATSAPP_LINK_1} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-lg">
              Consultar Disponibilidad
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;