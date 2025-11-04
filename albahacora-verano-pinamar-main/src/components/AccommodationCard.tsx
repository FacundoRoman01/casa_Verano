import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, BedDouble, Bath, Car, Flame, Waves, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

interface AccommodationCardProps {
  title: string;
  capacity: number;
  bedrooms: number;
  bathrooms: number;
  parking: number;
  description: string;
  images: string[];
}

const AccommodationCard = ({
  title,
  capacity,
  bedrooms,
  bathrooms,
  parking,
  description,
  images,
}: AccommodationCardProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-border/50">
      <div className="relative aspect-[4/3] overflow-hidden group">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((image, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <img
                  src={image}
                  alt={`${title} - imagen ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Botones de navegación */}
        <button
          onClick={scrollPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Imagen anterior"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Imagen siguiente"
        >
          <ChevronRight size={20} />
        </button>

        {/* Dots indicadores */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === selectedIndex
                  ? "bg-background w-6"
                  : "bg-background/50 hover:bg-background/70"
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-2xl font-serif">{title}</CardTitle>
          <Badge variant="secondary" className="ml-2">
            <Users size={14} className="mr-1" />
            {capacity}p
          </Badge>
        </div>
        <CardDescription className="text-base mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <BedDouble size={18} />
            <span className="text-sm">{bedrooms} habitaciones</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Bath size={18} />
            <span className="text-sm">{bathrooms} baños</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Car size={18} />
            <span className="text-sm">{parking} auto{parking > 1 ? "s" : ""}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Flame size={18} />
            <span className="text-sm">Parrilla</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Waves size={18} />
            <span className="text-sm">Pileta</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AccommodationCard;