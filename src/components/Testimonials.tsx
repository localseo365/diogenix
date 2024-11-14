import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'María G.',
    location: 'Barcelona',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200',
    rating: 5,
    text: 'El equipo de DIOGENIX fue extremadamente profesional y comprensivo con nuestra situación. Transformaron completamente el apartamento de mi madre y nos ayudaron en todo el proceso.',
    date: 'Marzo 2024'
  },
  {
    name: 'Joan Carles R.',
    location: 'Hospitalet',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=200&h=200',
    rating: 5,
    text: 'Un servicio excepcional. No solo limpiaron y desinfectaron todo el espacio, sino que también nos trataron con mucho respeto y empatía durante todo el proceso.',
    date: 'Febrero 2024'
  },
  {
    name: 'Anna M.',
    location: 'Badalona',
    image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=200&h=200',
    rating: 5,
    text: 'Increíble trabajo. Estaba muy preocupada por la situación de mi tío, pero DIOGENIX supo manejar todo de manera profesional y discreta. El resultado superó mis expectativas.',
    date: 'Enero 2024'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50" id="testimonios">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Testimonios</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Lo que nuestros clientes dicen sobre nuestro servicio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <Quote className="w-8 h-8 text-blue-900/20 mb-4" />
              
              <p className="text-gray-700 mb-4">
                {testimonial.text}
              </p>

              <p className="text-sm text-gray-500">
                {testimonial.date}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://wa.link/9h9hz9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-900 text-white px-8 py-4 rounded-full hover:bg-blue-800 transition-colors"
          >
            INFORMACION
          </a>
        </div>
      </div>
    </section>
  );
}