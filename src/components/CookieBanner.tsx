import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 z-30">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between max-w-6xl">
        <div className="text-sm mb-4 md:mb-0 md:mr-8">
          <p>Utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias mediante el análisis de sus hábitos de navegación. Si continúa navegando, consideramos que acepta su uso. Puede obtener más información en nuestra política de cookies.</p>
        </div>
        <div className="flex space-x-4 shrink-0">
          <button
            onClick={acceptCookies}
            className="bg-white text-gray-900 px-4 py-2 rounded hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            Aceptar
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-gray-300"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}