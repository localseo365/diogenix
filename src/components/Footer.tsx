import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">DIOGENIX</h3>
            <p className="text-gray-400">
              Servicio especializado en limpieza y desinfección para síndrome de Diógenes en Barcelona.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-gray-400 hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/proceso" className="text-gray-400 hover:text-white transition-colors">
                  Proceso
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:690220944" className="text-gray-400 hover:text-white transition-colors">
                  690 22 09 44
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:info@diogenix.es" className="text-gray-400 hover:text-white transition-colors">
                  info@diogenix.vercel.app
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-1" />
                <span className="text-gray-400">
                  Carrer d'Astúries, 30-52, Gràcia, 08012 Barcelona
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Horario</h4>
            <p className="text-gray-400">
              Servicio de emergencias disponible 24 horas al día, 7 días a la semana.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} DIOGENIX. Todos los derechos reservados.</p>
            <p className="mt-2">
              <Link to="/privacidad" className="hover:text-white transition-colors">
                Política de Privacidad
              </Link>
              {' · '}
              <Link to="/cookies" className="hover:text-white transition-colors">
                Política de Cookies
              </Link>
              {' · '}
              <Link to="/aviso-legal" className="hover:text-white transition-colors">
                Aviso Legal
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}