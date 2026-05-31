
'use client';
import React, { useState } from 'react';

export default function BookingForm() {
  // 1. Manejamos todo el estado del formulario en un solo objeto
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    fecha: '',
    time: '',
    invitados: '',
    comentario: ''
  });

  // 2. Función que reemplaza tu btnreserva.click
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue

    // Desestructuramos para validar más fácil de forma limpia
    const { name, email, number, fecha, time, invitados, comentario } = formData;

    // Validación exacta: ejecutamos trim() para asegurarnos que no metan solo espacios en blanco
    if (
      name.trim() === "" || 
      email.trim() === "" || 
      number.trim() === "" || 
      fecha.trim() === "" || 
      time.trim() === "" || 
      invitados.trim() === "" || 
      comentario.trim() === ""
    ) {
      alert("completa el formulario");
      return; // Detiene la ejecución si falta algo
    }

    // Guardado en LocalStorage idéntico al tuyo
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('number', number);
    localStorage.setItem('fecha', fecha);
    localStorage.setItem('time', time);
    localStorage.setItem('invitados', invitados);
    localStorage.setItem('comentario', comentario);

    // Tu alerta original con las variables de React
    alert(
      "te has registado exitosamente " + name + 
      " la hora y fecha de su reserva es " + time + " " + fecha + 
      " dele aceptar y se le enviara un correo de comfirmacion a su correo registrado " + email
    );
  };

  return (
    <section 
      id="reservas" 
      className="bg-gradient-to-br from-[#f8f9fa] to-white rounded-[30px] p-6 md:p-10 min-h-[110vh] w-[90%] mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-4 py-[30px] mt-12"
    >
      {/* Sección Datos */}
      <div className="flex flex-col gap-1.5 items-center w-full lg:w-1/2">
        <h2 className="text-2xl font-bold text-gray-800">Hacer una reserva</h2>
        <hr className="w-[100px] border-2 border-gray-400 mb-4" />
        
        {/* Atamos el formulario al handleSubmit */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 items-center w-full">
          <div className="flex gap-5 justify-center w-full">
            <input 
              type="text" 
              placeholder="nombre completo" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="p-[13px] w-[160px] md:w-[200px] rounded-[10px] border border-gray-400 text-gray-800 focus:outline-none focus:border-[#e74c3c]" 
            />
            <input 
              type="email" 
              placeholder="correro" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="p-[13px] w-[160px] md:w-[200px] rounded-[10px] border border-gray-400 text-gray-800 focus:outline-none focus:border-[#e74c3c]" 
            />
          </div>
          
          <div className="flex gap-5 justify-center w-full">
            <input 
              type="number" 
              placeholder="telefono" 
              value={formData.number}
              onChange={(e) => setFormData({...formData, number: e.target.value})}
              className="p-[13px] w-[160px] md:w-[200px] rounded-[10px] border border-gray-400 text-gray-800 focus:outline-none focus:border-[#e74c3c]" 
            />
            <input 
              type="date" 
              value={formData.fecha}
              onChange={(e) => setFormData({...formData, fecha: e.target.value})}
              className="p-[13px] w-[160px] md:w-[200px] rounded-[10px] border border-gray-400 text-gray-600 focus:outline-none focus:border-[#e74c3c]" 
            />
          </div>
          
          <div className="flex gap-5 justify-center w-full">
            <input 
              type="time" 
              value={formData.time}
              onChange={(e) => setFormData({...formData, time: e.target.value})}
              className="p-[13px] w-[160px] md:w-[200px] rounded-[10px] border border-gray-400 text-gray-600 focus:outline-none focus:border-[#e74c3c]" 
            />
            <input 
              type="text" 
              placeholder="invitados" 
              value={formData.invitados}
              onChange={(e) => setFormData({...formData, invitados: e.target.value})}
              className="p-[13px] w-[160px] md:w-[200px] rounded-[10px] border border-gray-400 text-gray-800 focus:outline-none focus:border-[#e74c3c]" 
            />
          </div>
          
          <div className="flex justify-center w-full">
            <input 
              id="comentario" 
              type="text" 
              placeholder="comentarios" 
              value={formData.comentario}
              onChange={(e) => setFormData({...formData, comentario: e.target.value})}
              className="p-[13px] h-[150px] w-[340px] md:w-[420px] rounded-[10px] border border-gray-400 text-gray-800 focus:outline-none focus:border-[#e74c3c]" 
            />
          </div>
          
          <button 
            type="submit" 
            className="bg-[#e74c3c] text-white p-[15px] rounded-[10px] w-[200px] text-xl font-medium border-none hover:bg-[#d43f2e] transition-colors self-center lg:self-auto cursor-pointer"
          >
            mesa de reserva
          </button>
        </form>
      </div>

      {/* Imagen Lateral */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&crop=center" 
          alt="Bistro Interior" 
          className="max-w-full h-[45vh] lg:h-[95vh] rounded-[20px] object-cover"
        />
      </div>
    </section>
  );
}