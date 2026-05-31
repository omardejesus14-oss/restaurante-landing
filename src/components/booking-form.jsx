
'use client';
import { useState } from 'react';



export default function BookingForm() {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [personas, setPersonas] = useState('');

  const manejarReserva = (e) => {
    e.preventDefault();

    // Coloca tu número de teléfono real para la prueba con el cliente
    const telefonoRestaurante = "573001234567"; 

    const mensaje = `¡Hola! Me gustaría realizar una reserva:%0A%0A` +
                    `*Nombre:* ${nombre}%0A` +
                    `*Fecha:* ${fecha}%0A` +
                    `*Hora:* ${hora}%0A` +
                    `*Personas:* ${personas} invitados`;

    const urlWhatsApp = `https://wa.me/${telefonoRestaurante}?text=${mensaje}`;
    window.open(urlWhatsApp, '_blank');
  };

  return (
    <div id="reservas" className="w-full max-w-5xl mx-auto bg-[#f8f9fa] rounded-[30px] border border-gray-100 shadow-sm overflow-hidden mt-12">
      {/* Contenedor Flex: En móvil va uno abajo del otro, en pantallas grandes (lg) va lado a lado */}
      <div className="flex flex-col lg:flex-row min-h-[550px]">
        
        {/* LADO IZQUIERDO: La Imagen */}
        <div className="w-full lg:w-[45%] min-h-[250px] lg:min-h-full relative bg-gray-200">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=1000&fit=crop" 
            alt="Ambiente del Restaurante" 
            className="w-full h-full object-cover absolute inset-0"
          />
          {/* Capa oscura decorativa sobre la imagen para darle un toque premium */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#f8f9fa]/10" />
        </div>

        {/* LADO DERECHO: El Formulario */}
        <div className="w-full lg:w-[55%] p-6 sm:p-10 flex flex-col justify-center">
          <div className="mb-6">
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              Reserva tu Mesa
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Completa los datos y confirma al instante por WhatsApp
            </p>
          </div>

          <form onSubmit={manejarReserva} className="space-y-4">
            {/* Campo Nombre */}
            <div>
              <label className="block text-xs font-extrabold text-gray-700 uppercase tracking-wider mb-1.5">
                Nombre Completo
              </label>
              <input 
                type="text" 
                required 
                placeholder="Ej. Omar de Jesús"
                value={nombre} 
                onChange={(e) => setNombre(e.target.value)}
                className="w-full p-3.5 bg-white rounded-xl border border-gray-200 text-gray-900 font-medium placeholder-gray-400 focus:outline-none focus:border-[#e74c3c] focus:ring-1 focus:ring-[#e74c3c] transition-colors" 
              />
            </div>

            {/* Fila de Fecha y Hora */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-extrabold text-gray-700 uppercase tracking-wider mb-1.5">
                  Fecha
                </label>
                <input 
                  type="date" 
                  required 
                  value={fecha} 
                  onChange={(e) => setFecha(e.target.value)}
                  className="w-full p-3.5 bg-white rounded-xl border border-gray-200 text-gray-900 font-medium focus:outline-none focus:border-[#e74c3c] focus:ring-1 focus:ring-[#e74c3c] transition-colors" 
                />
              </div>
              <div>
                <label className="block text-xs font-extrabold text-gray-700 uppercase tracking-wider mb-1.5">
                  Hora
                </label>
                <input 
                  type="time" 
                  required 
                  value={hora} 
                  onChange={(e) => setHora(e.target.value)}
                  className="w-full p-3.5 bg-white rounded-xl border border-gray-200 text-gray-900 font-medium focus:outline-none focus:border-[#e74c3c] focus:ring-1 focus:ring-[#e74c3c] transition-colors" 
                />
              </div>
            </div>

            {/* Campo Número de Personas */}
            <div>
              <label className="block text-xs font-extrabold text-gray-700 uppercase tracking-wider mb-1.5">
                Número de Invitados
              </label>
              <input 
                type="number" 
                required 
                min="1" 
                max="20"
                placeholder="¿Cuántas personas asisten?"
                value={personas} 
                onChange={(e) => setPersonas(e.target.value)}
                className="w-full p-3.5 bg-white rounded-xl border border-gray-200 text-gray-900 font-medium placeholder-gray-400 focus:outline-none focus:border-[#e74c3c] focus:ring-1 focus:ring-[#e74c3c] transition-colors" 
              />
            </div>

            {/* Botón de Envío */}
            <button 
              type="submit" 
              className="w-full h-14 mt-2 bg-[#e74c3c] text-white rounded-full font-bold shadow-lg shadow-red-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2 text-base"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.455L0 24zm6.59-4.846c1.66.986 3.298 1.448 4.757 1.451 5.405.002 9.801-4.394 9.804-9.801.002-2.618-1.012-5.08-2.859-6.93C16.447 1.975 13.985.952 11.373.951 5.964.951 1.568 5.348 1.566 10.757c-.001 1.52.404 3.003 1.173 4.317l-1.013 3.696 3.784-.992z"/>
              </svg>
              Solicitar Reserva por WhatsApp
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}