import React from 'react';
import { ArrowRight, Clock, Shield, Award } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <img
          src="https://www.steri-clean.com/wp-content/uploads/2023/12/Punta-Gorda-Hoarding-Cleanup.jpg"
          alt="Limpieza profesional del síndrome de Diógenes en Barcelona"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Expertos en limpieza por síndrome de Diógenes en Barcelona
          </h1>
          <p className="text-xl mb-8">
            Servicio profesional, discreto y especializado en Barcelona. Disponible 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.link/9h9hz9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              Solicitar presupuesto gratuito
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="https://wa.link/9h9hz9"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              CONTACTO
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white">
            <Clock className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Servicio 24/7</h3>
            <p>Disponibilidad inmediata para emergencias en toda Barcelona</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white">
            <Shield className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Máxima discreción</h3>
            <p>Garantizamos total confidencialidad en cada intervención</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white">
            <Award className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Equipo certificado</h3>
            <p>Personal especializado y protocolos avalados</p>
          </div>
        </div>
      </div>
    </div>
  );
}