
export default function Hero() {
  return (
    <section 
      id="hogar" 
      className="pt-[18vh] pb-12 w-[90%] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 min-h-[90vh]"
    >
      <div className="flex flex-col gap-6 max-w-xl text-center lg:text-left items-center lg:items-start">
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight">
          Sabores auténticos, <br />
          <span className="text-[#e74c3c]">momentos inolvidables</span>
        </h1>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          Disfrute de una experiencia gastronómica de primer nivel en el corazón de la ciudad. Nuestro chef combina ingredientes frescos de temporada con técnicas tradicionales para crear platos que deleitan todos los sentidos.
        </p>
        <a 
          href="#reservas" 
          className="inline-block bg-[#e74c3c] text-white px-8 py-3.5 rounded-xl font-bold text-lg shadow-lg shadow-red-500/20 hover:bg-[#d43f2e] transition-colors"
        >
          Reservar una Mesa
        </a>
      </div>
      
      <div className="w-full lg:w-1/2 flex justify-center">
        <img 
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop" 
          alt="Plato Gourmet" 
          className="rounded-[30px] shadow-xl max-w-full h-auto object-cover max-h-[50vh] lg:max-h-[60vh]"
        />
      </div>
    </section>
  );
}