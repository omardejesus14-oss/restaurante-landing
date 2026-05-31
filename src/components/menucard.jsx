
import Link from 'next/link';

export default function MenuCard() {
  const platos = [
    { title: "Risotto de trufa", price: "32 $", description: "Arroz arborio cremoso con trufa negra, parmesano y hierbas frescas", imageUrl: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=200&fit=crop&crop=center" },
    { title: "Salmón a la parrilla", price: "28 $", description: "Salmón del Atlántico con salsa de mantequilla de limón y verduras de temporada", imageUrl: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=200&fit=crop&crop=center" },
    { title: "Ternera Wellington", price: "45 $", description: "Solomillo de ternera premium envuelto en hojaldre con duxelles de champiñones", imageUrl: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=200&fit=crop&crop=center" },
    { title: "Langosta Thermidor", price: "52 $", description: "Langosta fresca en salsa de crema de coñac con queso gruyere", imageUrl: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=400&h=200&fit=crop&crop=center" },
    { title: "Confit de pato", price: "38 $", description: "Muslo de pato cocinado a fuego lento con patatas al ajillo y reducción de cerezas", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=200&fit=crop&crop=center" },
    { title: "Soufflé de chocolate", price: "16 $", description: "Soufflé de chocolate caliente con helado de vainilla y coulis de frutos rojos", imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=200&fit=crop&crop=center" },
  ];

  return (
    <div id="menu" className="w-full flex flex-col items-center">
      {/* Contenedor que hace el bucle local de las tarjetas con tus medidas exactas */}
      <div className="flex flex-wrap justify-center gap-8 items-stretch w-full">
        {platos.map((plato, index) => (
          <div 
            key={index} 
            className="bg-[#f8f9fa] w-full lg:w-[28%] rounded-[20px] flex flex-col items-center gap-[30px] p-6 transition-transform duration-200 ease-in-out hover:scale-[1.03] group shadow-sm"
          >
            <div className="w-[90%] h-[30vh] overflow-hidden rounded-[20px]">
              <img 
                src={plato.imageUrl} 
                alt={plato.title} 
                className="w-full h-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-110"
              />
            </div>
            
            <div className="w-[90%] flex flex-col gap-2.5 flex-grow justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{plato.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mt-1">{plato.description}</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#e74c3c] mb-3">{plato.price}</h4>
                <Link 
                  href="/menu" 
                  className="flex items-center justify-center w-full h-10 text-[#e74c3c] bg-transparent border-2 border-[#e74c3c] rounded-[20px] font-medium transition-colors duration-200 hover:bg-[#e74c3c] hover:text-white"
                >
                  ver menú
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Botón inferior para ir a ver toda la carta completa */}
      <div className="text-center mt-14">
        <Link 
          href="/menu" 
          className="inline-block bg-[#e74c3c] text-white px-10 py-3.5 rounded-full font-bold text-lg shadow-lg shadow-red-500/20 hover:scale-105 transition-all cursor-pointer"
        >
          Explorar Carta Completa →
        </Link>
      </div>
    </div>
  );
}