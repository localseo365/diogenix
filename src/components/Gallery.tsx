import React, { useState } from 'react';
import { X } from 'lucide-react';

const images = [
  {
    url: 'https://media.npr.org/assets/img/2011/05/02/hoarders_wide-9eb55a3fe88bb89908978e026de54ce6d83b7956.jpg?s=1100&c=85&f=jpeg',
    title: 'Antes de la limpieza',
    description: 'Situación inicial típica en casos de síndrome de Diógenes'
  },
  {
    url: 'https://www.clutterhoardingcleanup.com/sites/default/files/inline-images/About-Cleaning.jpg',
    title: 'Limpieza de un piso en Barcelona',
    description: 'Nuestro equipo trabajando en la recuperación del espacio'
  },
  {
    url: 'https://www.icecleaning.co.uk/media/images/uploaded/inline/AdobeStock_396642709_Editorial_Use_Only.1702994986.jpeg',
    title: 'Vaciado por síndrome de Diógenes en Hospitalet',
    description: 'Espacio a punto para vaciar y desinfectar.'
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white" id="galeria">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Galería de trabajos realizados</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ejemplos de nuestros servicios de limpieza y desinfección
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                  <p className="text-sm">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal para vista ampliada */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={images[selectedImage].url}
              alt={images[selectedImage].title}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <div className="absolute bottom-4 left-4 right-4 text-white text-center">
              <h3 className="text-xl font-semibold mb-2">{images[selectedImage].title}</h3>
              <p>{images[selectedImage].description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}