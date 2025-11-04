import React, { useState } from 'react';
import { Calendar, Users, MapPin, MessageCircle, Phone } from 'lucide-react';

// --- CONFIGURACIÓN DE CONTACTO ---
const WHATSAPP_NUMBER_PRIMARY = "+54 9 2254 41-9915";
const WHATSAPP_NUMBER_SECONDARY = "+54 9 2254 44-2728";
const WHATSAPP_LINK_PRIMARY = `https://wa.me/5492254419915?text=${encodeURIComponent("Hola, quisiera consultar tarifas y disponibilidad para una estadía.")}`;
const GOOGLE_MAPS_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3167.3190838186175!2d-56.8837267!3d-37.1264426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959c9d41d3b3799d%3A0x2a9a5f4f5f8b911c!2sDe%20la%20Albacora%201859%2C%20Pinamar%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar";
const ADDRESS = "De la Albacora 1859, Pinamar, Buenos Aires.";

// Colores basados en una paleta premium: Azul cálido (accent) y Crema/Gris (fondo)
const COLORS = {
  primary: 'bg-blue-500 ',
  primaryText: 'text-white',
  accent: 'text-blue-600',
  card: 'bg-white',
  
};

// Componente principal de la sección de reservas
const Contact = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  
  // Función simulada para manejar la consulta/reserva
  const handleBooking = (e) => {
    e.preventDefault();
    if (!checkIn || !checkOut || guests < 1) {
      console.error("Por favor, complete todos los campos de reserva.");
      // En una implementación real, aquí se mostraría un mensaje de error en la UI.
      return;
    }
    
    // Simula la acción: Redirigir o abrir un modal de cotización
    const datesQuery = `Check-in: ${checkIn}, Check-out: ${checkOut}, Huéspedes: ${guests}.`;
    const fullMessage = encodeURIComponent(`Hola, quisiera consultar tarifas y disponibilidad para las siguientes fechas: ${datesQuery}`);
    window.open(`https://wa.me/5492254419915?text=${fullMessage}`, '_blank');
  };

  return (
    // Se corrigió para usar COLORS.background y font-inter correctamente
    <div className={` py-16 md:py-24 font-inter relative`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- 1. ENCABEZADO Y SLOGAN --- */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3 tracking-tight">
            Planifica tu Escape Perfecto
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Ingresa tus fechas y recibe una cotización al instante, o comunícate por WhatsApp para una respuesta inmediata.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto">
          
          {/* --- 2. MINI-MOTOR DE RESERVAS (PRIMARIO CTA) --- */}
          <div className="lg:w-1/2">
            <div className={`p-6 md:p-8 rounded-xl shadow-2xl ${COLORS.card} border border-gray-100`}>
              <h2 className="text-2xl font-bold mb-6 text-gray-700">Verificar Disponibilidad</h2>
              
              <form onSubmit={handleBooking} className="space-y-6">
                
                {/* Check-in */}
                <div>
                  <label htmlFor="checkIn" className="flex items-center text-sm font-medium text-gray-600 mb-2">
                    <Calendar size={16} className={`mr-2 ${COLORS.accent}`} /> Fecha de Check-in
                  </label>
                  <input
                    type="date"
                    id="checkIn"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                  />
                </div>
                
                {/* Check-out */}
                <div>
                  <label htmlFor="checkOut" className="flex items-center text-sm font-medium text-gray-600 mb-2">
                    <Calendar size={16} className={`mr-2 ${COLORS.accent}`} /> Fecha de Check-out
                  </label>
                  <input
                    type="date"
                    id="checkOut"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    required
                    min={checkIn} // Simple validation
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                  />
                </div>

                {/* Huéspedes */}
                <div>
                  <label htmlFor="guests" className="flex items-center text-sm font-medium text-gray-600 mb-2">
                    <Users size={16} className={`mr-2 ${COLORS.accent}`} /> Cantidad de Huéspedes
                  </label>
                  <input
                    type="number"
                    id="guests"
                    value={guests}
                    onChange={(e) => setGuests(Math.max(1, parseInt(e.target.value) || 1))}
                    min="1"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                  />
                </div>
                
                {/* CTA Principal */}
                <button 
                  type="submit"
                  className={`w-full text-lg font-semibold tracking-wide py-4 rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-[1.01] ${COLORS.primary} ${COLORS.primaryText} shadow-blue-500/50`}
                >
                  Ver Tarifas y Reservar (¡Respuesta Instantánea!)
                </button>
                <p className="text-xs text-center text-gray-400 mt-2">
                  (Serás redirigido a WhatsApp con tu consulta pre-cargada)
                </p>
              </form>
            </div>
          </div>

          {/* --- 3. INFORMACIÓN DE CONTACTO Y MAPA --- */}
          <div className="lg:w-1/2 space-y-8">
            
            {/* Tarjeta de Contacto Consolidado */}
            <div className={`p-6 rounded-xl shadow-md ${COLORS.card} border border-gray-100`}>
              <h2 className="text-2xl font-bold mb-4 text-gray-700">Contacto Directo</h2>
              <p className="text-gray-500 mb-4">¿Prefieres chatear o llamar directamente? Estamos para ayudarte.</p>
              
              <div className="space-y-4">
                {/* WhatsApp Primario */}
                <div className="flex items-center">
                  <MessageCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                  <div>
                    <span className="block font-semibold text-gray-800">WhatsApp (Principal)</span>
                    <a href={WHATSAPP_LINK_PRIMARY} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition font-medium">
                      {WHATSAPP_NUMBER_PRIMARY} <span className="text-xs ml-1">(Chatear Ahora)</span>
                    </a>
                  </div>
                </div>
                
                {/* Teléfono Secundario */}
                <div className="flex items-center">
                  <Phone size={20} className="text-gray-500 mr-3 flex-shrink-0" />
                  <div>
                    <span className="block font-semibold text-gray-800">Teléfono / WhatsApp</span>
                    <a href={`tel:${WHATSAPP_NUMBER_SECONDARY.replace(/\s|-/g, '')}`} className="text-gray-600 hover:text-blue-500 transition font-medium">
                      {WHATSAPP_NUMBER_SECONDARY}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarjeta de Dirección y Mapa Interactivo */}
            <div className={`p-6 rounded-xl shadow-md ${COLORS.card} border border-gray-100`}>
              <div className="flex items-center mb-4">
                <MapPin size={20} className={`${COLORS.accent} mr-3`} />
                <h2 className="text-2xl font-bold text-gray-700">Ubicación</h2>
              </div>
              <p className="text-gray-500 mb-4">{ADDRESS}</p>
              
              {/* Mapa (Iframe de Google Maps - Responsivo) */}
              <div className="aspect-w-16 aspect-h-9 w-full rounded-lg overflow-hidden shadow-inner">
                <iframe
                  src={GOOGLE_MAPS_URL}
                  width="100%"
                  height="300"
                  // allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de la Ubicación en Pinamar"
                  className="w-full h-full border-0"
                ></iframe>
              </div>
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className={`block mt-4 text-center font-medium ${COLORS.accent} hover:text-blue-700 transition`}
              >
                Ver en Google Maps
              </a>
            </div>
            
          </div>
        </div>
      </div>
      
      {/* --- 4. CTA FLOTANTE DE WHATSAPP --- */}
      <a 
        href={WHATSAPP_LINK_PRIMARY} 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Chatear por WhatsApp"
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-green-500 shadow-xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-50"
      >
        <MessageCircle size={32} className="text-white fill-white" />
      </a>
      
    </div>
  );
};

export default Contact;
