

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-[15vh] w-[95%] mx-auto flex justify-between items-center bg-white/95 backdrop-blur-[10px] z-[1000] transition-all duration-300 border-b border-gray-100 px-4 md:px-8">
      {/* Logo y Título */}
      <div className="flex items-center gap-2">
        <svg width="30" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="18" stroke="#e74c3c" strokeWidth="2" fill="none" />
          <circle cx="20" cy="20" r="14" stroke="#e74c3c" strokeWidth="1" fill="none" opacity="0.5" />
          <path d="M10 12 L10 20 M8 12 L8 15 M12 12 L12 15 M8 12 L12 12" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M30 12 L30 20 M28 12 Q28 14 30 14" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <ellipse cx="20" cy="26" rx="6" ry="3" fill="#e74c3c" opacity="0.2" />
          <path d="M14 26 C14 24 16 22 20 22 C24 22 26 24 26 26" stroke="#e74c3c" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <circle cx="17" cy="24" r="1" fill="#e74c3c" opacity="0.6" />
          <circle cx="20" cy="23" r="1" fill="#e74c3c" opacity="0.6" />
          <circle cx="23" cy="24" r="1" fill="#e74c3c" opacity="0.6" />
        </svg>
        <h2 className="text-xl font-bold text-gray-800">Elegancia de bistró</h2>
      </div>

      {/* Enlaces usando el componente Link nativo de Next.js */}
      <div className="hidden lg:flex items-center gap-6">
        <div className="w-24 text-center">
          <Link href="#hogar" className="text-[#000a] text-base transition-all duration-200 hover:text-[#e74c3c] hover:border-2 hover:border-[#e74c3c] hover:p-2 hover:rounded-lg">
            Hogar
          </Link>
        </div>
        <div className="w-24 text-center">
          <Link href="#menu" className="text-[#000a] text-base transition-all duration-200 hover:text-[#e74c3c] hover:border-2 hover:border-[#e74c3c] hover:p-2 hover:rounded-lg">
            Menu
          </Link>
        </div>
        <div className="w-24 text-center">
          <Link href="#reservas" className="text-[#000a] text-base transition-all duration-200 hover:text-[#e74c3c] hover:border-2 hover:border-[#e74c3c] hover:p-2 hover:rounded-lg">
            Reservas
          </Link>
        </div>
        <div className="w-24 text-center">
          <Link href="#contactos" className="text-[#000a] text-base transition-all duration-200 hover:text-[#e74c3c] hover:border-2 hover:border-[#e74c3c] hover:p-2 hover:rounded-lg">
            Contactos
          </Link>
        </div>
      </div>
    </nav>
  );
}