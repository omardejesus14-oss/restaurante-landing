
import Link from 'next/link';
import Navbar from '@/components/navbar';


export default function MenuPage() {
  // Array de objetos con categorías, platos, precios e imágenes reales
  const categorias = [
    {
      nombre: "Entradas",
      platos: [
        { 
          nombre: "Carpaccio de Res", 
          precio: "18 $", 
          desc: "Finas láminas de solomillo premium con alcaparras, parmesano fresco y aceite de oliva.",
          imagen: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&h=350&fit=crop"
        },
        { 
          nombre: "Bruschettas de Tomate", 
          precio: "12 $", 
          desc: "Pan artesanal tostado con tomates concassé, albahaca fresca y reducción balsámica.",
          imagen: "https://images.unsplash.com/photo-1572656631137-7935297eff55?w=500&h=350&fit=crop"
        }
      ]
    },
    {
      nombre: "Platos Fuertes",
      platos: [
        { 
          nombre: "Risotto de trufa", 
          precio: "32 $", 
          desc: "Arroz arborio cremoso con trufa negra silvestre, champiñones y queso parmesano.",
          imagen: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=500&h=350&fit=crop"
        },
        { 
          nombre: "Salmón a la parrilla", 
          precio: "28 $", 
          desc: "Filete de salmón del Atlántico con salsa de mantequilla de limón, eneldo y verduras tiernas.",
          imagen: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&h=350&fit=crop"
        },
        { 
          nombre: "Ternera Wellington", 
          precio: "45 $", 
          desc: "Solomillo de ternera envuelto en hojaldre crujiente con duxelles de champiñones y jamón ibérico.",
          imagen: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&h=350&fit=crop"
        }
      ]
    },
    {
      nombre: "Postres",
      platos: [
        { 
          nombre: "Soufflé de chocolate", 
          precio: "16 $", 
          desc: "Soufflé de chocolate amargo caliente con centro líquido, acompañado de helado de vainilla.",
          imagen: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=350&fit=crop"
        },
        { 
          nombre: "Tiramisú Clásico", 
          precio: "14 $", 
          desc: "Capas de bizcocho italiano empapadas en café espresso, licor y suave crema de mascarpone.",
          imagen: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&h=350&fit=crop"
        }
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-[15vh]">
      {/* Importamos tu Navbar para mantener la coherencia visual */}
      <Navbar />
      
      <main className="max-w-5xl mx-auto px-4 md:px-6 py-12">
        {/* Encabezado de la página */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-16 border-b border-gray-100 pb-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              Nuestra Carta
            </h1>
            <p className="text-gray-500 mt-2 text-sm md:text-base">Descubre nuestras exclusivas especialidades de autor</p>
          </div>
          <Link href="/" className="text-[#e74c3c] font-bold hover:underline flex items-center gap-1 transition-all">
            ← Volver al inicio
          </Link>
        </div>

        {/* Listado de Categorías y Platos */}
        <div className="space-y-16">
          {categorias.map((cat, i) => (
            <section key={i} className="animate-fadeIn">
              <h2 className="text-xl md:text-2xl font-extrabold text-[#e74c3c] uppercase tracking-widest mb-8 flex items-center gap-3">
                <span>{cat.nombre}</span>
                <div className="h-[2px] bg-gray-100 flex-grow" />
              </h2>
              
              {/* Grid de platos con imágenes responsivo */}
              <div className="grid md:grid-cols-2 gap-8">
                {cat.platos.map((plato, j) => (
                  <div key={j} className="flex gap-4 bg-[#f8f9fa] p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
                    {/* Imagen fija del plato */}
                    <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 overflow-hidden rounded-xl bg-gray-200">
                      <img 
                        src={plato.imagen} 
                        alt={plato.nombre} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Información del plato */}
                    <div className="flex flex-col justify-between flex-grow">
                      <div>
                        <div className="flex justify-between items-start gap-2 mb-1">
                          <h3 className="text-base sm:text-lg font-bold text-gray-900">
                            {plato.nombre}
                          </h3>
                          <span className="font-extrabold text-gray-900 whitespace-nowrap text-sm sm:text-base text-right">
                            {plato.price || plato.precio}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-500 leading-snug line-clamp-2 sm:line-clamp-none">
                          {plato.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Caja de llamado a la acción inferior */}
        <div className="mt-24 p-8 bg-gradient-to-br from-[#f8f9fa] to-white rounded-3xl text-center border border-gray-200 shadow-sm max-w-2xl mx-auto">
          <p className="text-gray-600 mb-4 font-semibold italic">¿Listo para vivir una experiencia gastronómica única?</p>
          <Link 
            href="/#reservas" 
            className="inline-block bg-[#e74c3c] text-white px-8 py-3.5 rounded-full font-bold shadow-lg shadow-red-500/20 hover:scale-105 transition-transform cursor-pointer"
          >
            Reservar una mesa
          </Link>
        </div>
      </main>
    </div>
  );
}