import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function About() {
  const benefits = [
    'Experiencia y profesionalismo: Contamos con años de experiencia en el manejo de casos de acumulación extrema.',
    'Desinfección completa: Garantizamos una desinfección profunda para eliminar agentes patógenos y malos olores.',
    'Servicio personalizado y Respetuoso: Tratamos cada caso con el respeto que merece y ajustamos nuestros servicios a las condiciones de cada vivienda.',
    'Atención rápida y eficaz: Sabemos que algunos casos requieren respuesta urgente; por eso, ofrecemos disponibilidad flexible y tiempo de respuesta rápida.'
  ];

  return (
    <section className="py-20 bg-white" id="sobre-nosotros">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Sobre nosotros</h2>
          <h3 className="text-xl text-gray-600 mb-8 text-center">
            Especialistas en limpieza y desinfección de viviendas con acumulación exportxtrema en Barcelona
          </h3>

          <div className="space-y-6 text-gray-700">
            <p>
              En DIOGENIX, nos dedicamos exclusivamente a la limpieza y desinfección de viviendas afectadas por el síndrome de Diógenes en Barcelona y alrededores. Con una amplia experiencia y un equipo altamente capacitado, entendemos que la limpieza de este tipo de entornos requiere una sensibilidad especial y técnicas avanzadas para garantizar la seguridad de todos los involucrados. Nos enorgullece ofrecer un servicio discreto, profesional y completamente adaptado a las necesidades de cada cliente, devolviendo a las viviendas su estado seguro y saludable.
            </p>

            <p>
              Trabajamos con equipos especializados en limpieza profunda y desinfección ambiental, removiendo de manera segura y eficaz la acumulación de residuos y deshechos de toda índole. En DIOGENIX, seguimos estrictos protocolos de higiene para cumplir con las normativas sanitarias y ofrecer una calidad superior en cada servicio.
            </p>

            <div className="mt-12">
              <h4 className="text-2xl font-semibold mb-6">¿Por qué elegir DIOGENIX?</h4>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-900 mt-1 mr-3 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 text-center">
              <a
                href="https://wa.link/9h9hz9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-900 text-white px-8 py-4 rounded-full hover:bg-blue-800 transition-colors"
              >
                Solicita tu diagnóstico gratis
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}