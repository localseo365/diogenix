import React from 'react';
import { ClipboardCheck, Sparkles, Truck, Shield } from 'lucide-react';

const steps = [
  {
    icon: ClipboardCheck,
    title: 'Evaluación inicial gratuita',
    description: 'Análisis detallado de la situación y planificación personalizada del servicio.'
  },
  {
    icon: Sparkles,
    title: 'Limpieza especializada',
    description: 'Aplicación de protocolos específicos de limpieza y desinfección.'
  },
  {
    icon: Truck,
    title: 'Gestión de residuos',
    description: 'Clasificación y eliminación responsable de materiales según normativas.'
  },
  {
    icon: Shield,
    title: 'Desinfección final',
    description: 'Tratamiento completo para garantizar un espacio seguro y saludable.'
  }
];

export default function Process() {
  return (
    <section className="py-20 bg-gray-50" id="proceso">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestro proceso</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Metodología probada para garantizar resultados excepcionales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-blue-200 transform translate-y-4" />
              )}
              <div className="relative z-10 bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <step.icon className="w-8 h-8 text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://wa.link/9h9hz9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-900 text-white px-8 py-4 rounded-full hover:bg-blue-800 transition-colors"
          >
            Solicitar evaluación gratuita
          </a>
        </div>
      </div>
    </section>
  );
}