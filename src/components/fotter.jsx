
export default function Footer() {
  return (
    <footer id="contactos" className="bg-gray-900 text-gray-400 py-16 mt-20">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Elegancia de Bistró</h3>
          <p className="text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
            Pasión por la alta cocina y el servicio excepcional. Visítenos y viva una experiencia única.
          </p>
        </div>
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Horarios</h3>
          <p className="text-sm">Lunes a Viernes: 12:00 PM - 11:00 PM</p>
          <p className="text-sm mt-1">Sábados y Domingos: 11:00 AM - 12:00 AM</p>
        </div>
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Ubicación y Contacto</h3>
          <p className="text-sm">Calle Principal #123, Zona Gourmet</p>
          <p className="text-sm mt-1">Teléfono: +1 234 567 890</p>
          <p className="text-sm mt-1">Email: info@bistroelegance.com</p>
        </div>
      </div>
      <div className="w-[90%] mx-auto border-t border-gray-800 mt-12 pt-6 text-center text-xs">
        <p>© {new Date().getFullYear()} Elegancia de Bistró. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}