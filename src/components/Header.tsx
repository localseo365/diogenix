import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollToSection('inicio')} className="flex items-center space-x-2 cursor-pointer">
            <Link to="/" className="text-2xl font-bold text-blue-900">DIOGENIX</Link>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('sobre-nosotros')} className="text-gray-700 hover:text-blue-900">
              Sobre Nosotros
            </button>
            <button onClick={() => scrollToSection('servicios')} className="text-gray-700 hover:text-blue-900">
              Servicios
            </button>
            <button onClick={() => scrollToSection('proceso')} className="text-gray-700 hover:text-blue-900">
              Proceso
            </button>
            <button onClick={() => scrollToSection('galeria')} className="text-gray-700 hover:text-blue-900">
              Galería
            </button>
            <button onClick={() => scrollToSection('testimonios')} className="text-gray-700 hover:text-blue-900">
              Testimonios
            </button>
            <button onClick={() => scrollToSection('contacto')} className="text-gray-700 hover:text-blue-900">
              Contacto
            </button>
            <a href="tel:690220944" className="flex items-center bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-800 transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              690 22 09 44
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t shadow-lg">
            <div className="flex flex-col space-y-4 p-4">
              <button onClick={() => scrollToSection('sobre-nosotros')} className="text-gray-700 hover:text-blue-900">
                Sobre Nosotros
              </button>
              <button onClick={() => scrollToSection('servicios')} className="text-gray-700 hover:text-blue-900">
                Servicios
              </button>
              <button onClick={() => scrollToSection('proceso')} className="text-gray-700 hover:text-blue-900">
                Proceso
              </button>
              <button onClick={() => scrollToSection('galeria')} className="text-gray-700 hover:text-blue-900">
                Galería
              </button>
              <button onClick={() => scrollToSection('testimonios')} className="text-gray-700 hover:text-blue-900">
                Testimonios
              </button>
              <button onClick={() => scrollToSection('contacto')} className="text-gray-700 hover:text-blue-900">
                Contacto
              </button>
              <a href="tel:690220944" className="flex items-center justify-center bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-800">
                <Phone className="w-4 h-4 mr-2" />
                690 22 09 44
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}