import React, { useState } from 'react';
import { ArrowRight, Phone, Mail, Building, CheckCircle, Calendar, MessageCircle } from 'lucide-react';

const CTA = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hola, me interesa agendar una demo de saint. ¿Podrían contactarme?");
    window.open(`https://wa.me/50433663837?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm-16-16v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Content */}
          <div className="space-y-8 mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Solicita tu demo
                </span> hoy mismo
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Descubre cómo saint puede transformar la seguridad y organización de tu residencial, empresa o eventos. 
                Contáctanos por WhatsApp para agendar una demostración personalizada completamente gratis.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="flex items-center gap-4">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-gray-200">Configuración inicial gratuita</span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-gray-200">Soporte técnico especializado</span>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA Button */}
          <div className="mb-12">
            <button
              onClick={handleWhatsAppClick}
              className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-xl px-12 py-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center justify-center gap-4 mx-auto"
            >
              <MessageCircle className="w-8 h-8 group-hover:animate-pulse" />
              Agendar Demo por WhatsApp
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
              <Phone className="w-8 h-8 text-green-400 mx-auto mb-3 animate-bounce" />
              <h3 className="font-bold text-xl mb-4">¿Prefieres llamarnos?</h3>
              <a href="tel:+50433663837" className="text-white hover:text-green-400 transition-colors duration-300 text-lg">
                +504 3366-3837
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3 animate-pulse" />
              <h3 className="font-bold text-xl mb-4">Email</h3>
              <a href="mailto:info@sainthn.com" className="text-white hover:text-cyan-400 transition-colors duration-300 text-lg">
                info@sainthn.com
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
              <Calendar className="w-8 h-8 text-blue-400 mx-auto mb-3 animate-pulse" />
              <h3 className="font-bold text-xl mb-4">Horarios</h3>
              <span className="text-white text-lg">Lun - Vie: 8:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;