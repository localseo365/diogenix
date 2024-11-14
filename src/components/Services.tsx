import React from 'react';
import { Paintbrush, Trash2, Shield, Wind, Bug } from 'lucide-react';

const services = [
  {
    icon: Paintbrush,
    title: 'Limpieza profunda y desinfección integral',
    description: 'El servicio de limpieza profunda es esencial en viviendas afectadas por acumulación excesiva. Nuestros técnicos expertos realizan una limpieza exhaustiva, eliminando polvo, suciedad y restos de materiales inservibles. Utilizamos productos y técnicas especializadas para asegurar la desinfección integral del espacio.',
    cta: 'Solicita Información para Limpieza Profunda'
  },
  {
    icon: Trash2,
    title: 'Retirada y gestión de residuos y objetos acumulados',
    description: 'La acumulación de objetos en viviendas con síndrome de Diógenes suele generar un ambiente insalubre. Nos encargamos del retiro y gestión de residuos, cumpliendo con todas las normativas ambientales en Barcelona. Transportamos y clasificamos los objetos, respetando las pertenencias que puedan tener valor sentimental para el cliente.',
    cta: 'Contáctanos para Retiro de Residuos'
  },
  {
    icon: Shield,
    title: 'Desinfección de superficies y ambientes con productos de alta eficacia',
    description: 'La acumulación puede generar riesgos sanitarios por la presencia de bacterias y otros agentes patógenos. En DIOGENIX, utilizamos productos desinfectantes de alta eficacia para eliminar cualquier riesgo de contagio. Nuestro objetivo es crear un espacio seguro y libre de microorganismos perjudiciales.',
    cta: 'Consulta Sobre Desinfección de Superficies'
  },
  {
    icon: Wind,
    title: 'Desodorización de espacios con equipos profesionales',
    description: 'Las viviendas afectadas por el síndrome de Diógenes suelen tener olores fuertes y persistentes. Con equipos de desodorización profesional, neutralizamos estos olores para que el espacio recupere un ambiente fresco y saludable.',
    cta: 'Solicita Nuestro Servicio de Desodorización'
  },
  {
    icon: Bug,
    title: 'Desinfección contra plagas y bacterias',
    description: 'La acumulación y la falta de limpieza adecuada pueden propiciar la aparición de plagas y bacterias. En DIOGENIX, contamos con servicios de desinfección específicos para eliminar plagas y evitar infecciones. Protegemos tanto la salud de las personas como la higiene del espacio.',
    cta: 'Protege tu hogar con nuestra desinfección'
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-white" id="servicios">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Servicios profesionales de limpieza para viviendas afectadas por el síndrome de Diógenes en Barcelona
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            En DIOGENIX, nos especializamos en la limpieza y desinfección de viviendas afectadas por acumulación extrema y síndrome de Diógenes. Nuestro equipo de profesionales altamente capacitados trabaja con sensibilidad, respeto y discreción, garantizando un ambiente saludable y habitable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <service.icon className="w-12 h-12 text-blue-900 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <a
                href="https://wa.link/9h9hz9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-900 font-semibold hover:text-blue-800 transition-colors"
              >
                {service.cta} →
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">
            En DIOGENIX, nos comprometemos a ofrecer un servicio profesional, discreto y efectivo, entendiendo la importancia de restaurar un espacio seguro y habitable. Contáctanos hoy para obtener un presupuesto adaptado a tus necesidades.
          </p>
          <a
            href="https://wa.link/9h9hz9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-900 text-white px-8 py-4 rounded-full hover:bg-blue-800 transition-colors"
          >
            Solicitar presupuesto personalizado
          </a>
        </div>
      </div>
    </section>
  );
}