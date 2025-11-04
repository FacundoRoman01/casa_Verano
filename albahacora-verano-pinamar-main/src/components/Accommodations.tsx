import AccommodationCard from "./AccommodationCard";

// ===================================================
// CASA 1 - TODAS LAS FOTOS
// ===================================================
import casa1_balcon from "@/assets/casa1/casa1_balcon.jpg";
import casa1_banoCuarto1 from "@/assets/casa1/casa1_baño_cuarto1.jpg";
import casa1_habitacion1 from "@/assets/casa1/casa1_habitacion1.jpg";
import casa1_habitacion2 from "@/assets/casa1/casa1_habitacion2.jpg";
import casa1_habitacion3 from "@/assets/casa1/casa1_habitacion3.jpg";
import casa1_habitacion4 from "@/assets/casa1/casa1_habitacion4.jpg";
import casa1_pasilloabajo from "@/assets/casa1/casa1_pasilloabajo.jpg";
import casa1_pasilloarriba from "@/assets/casa1/casa1_pasilloarriba.jpg";
import casa1_principal from "@/assets/casa1/casa1_principal.jpg";
import pileta1 from "@/assets/casa1/pileta.jpg";

// ===================================================
// CASA 2 - TODAS LAS FOTOS
// ===================================================


import casa2_bano1 from "@/assets/casa2/casa2_baño1.jpg";
import casa2_bano2 from "@/assets/casa2/casa2_baño2.jpg";
import casa2_habitacion1 from "@/assets/casa2/casa2_habitacion1.jpg";
import casa2_habitacion2 from "@/assets/casa2/casa2_habitacion2.jpg";
import casa2_patio from "@/assets/casa2/casa2_patio.jpg";
import casa2_principal2 from "@/assets/casa2/casa2_principal.jpg";
import casa2_principal3 from "@/assets/casa2/casa2_principal2.jpg";
import pileta2 from "@/assets/casa2/pileta.jpg";

// ===================================================
// CASA 3 (DEPARTAMENTO) - TODAS LAS FOTOS
// ===================================================
import casa3_bano1 from "@/assets/casa3/casa3_baño1.jpg";
import casa3_cocina from "@/assets/casa3/casa3_cocina.jpg";
import casa3_cuarto1 from "@/assets/casa3/casa3_cuarto1.jpg";
import casa3_cuarto2 from "@/assets/casa3/casa3_cuarto2.jpg";
import casa3_living from "@/assets/casa3/casa3_living.jpg";
import casa3_mesa from "@/assets/casa3/casa3_mesa.jpg";
import casa3_parrilla from "@/assets/casa3/casa3_parrilla.jpg";
import casa3_pasillo from "@/assets/casa3/casa3_pasillo.jpg";
import pileta3 from "@/assets/casa3/casa3_pileta.jpg";

const Accommodations = () => {
  const accommodations = [
    {
      title: "Casa 1",
      capacity: 10,
      bedrooms: 4,
      bathrooms: 3,
      parking: 2,
      description: "Amplia casa con 4 habitaciones, parrilla privada y espacio para 10 personas. Ideal para familias grandes.",
      images: [
        casa1_principal,
        casa1_pasilloabajo,
        casa1_pasilloarriba,
        casa1_habitacion1,
        casa1_habitacion2,
        casa1_habitacion3,
        casa1_habitacion4,
        casa1_banoCuarto1,
        casa1_balcon,
        pileta1,
      ],
    },
    {
      title: "Casa 2",
      capacity: 8,
      bedrooms: 3,
      bathrooms: 2,
      parking: 1,
      description: "Confortable casa de 3 habitaciones con parrilla privada. Perfecta para grupos medianos.",
      images: [
        
        casa2_principal2,
        casa2_principal3,
        casa2_habitacion1,
        casa2_habitacion2,
        casa2_bano1,
        casa2_bano2,
        casa2_patio,
        
        pileta2,
      ],
    },
    {
      title: "Departamento",
      capacity: 6,
      bedrooms: 2,
      bathrooms: 1,
      parking: 1,
      description: "Acogedor departamento de 2 habitaciones con parrilla privada. Ideal para familias pequeñas.",
      images: [
        casa3_living,
        casa3_cocina,
        casa3_cuarto1,
        casa3_cuarto2,
        casa3_bano1,
        casa3_mesa,
        casa3_parrilla,
        casa3_pasillo,
        pileta3,
      ],
    },
  ];

  return (
    <section id="alojamientos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-4">
            Nuestros Alojamientos
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Tres opciones independientes, cada una con parrilla privada, acceso a pileta compartida y estacionamiento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodations.map((accommodation, index) => (
            <AccommodationCard key={index} {...accommodation} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accommodations;