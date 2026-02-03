import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin, Shield, Smartphone, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/Logo Solo.png" 
                alt="SAINTHN Logo" 
                className="w-12 h-12"
              />
              <div>
                <h3 className="text-2xl font-bold">SAINT</h3>
              </div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              Revolucionando el control de acceso con tecnología QR inteligente para residenciales, empresas y eventos en Honduras.
            </p>
            
            {/* Social Media */}
            <div className="flex items-center gap-4 mb-6">
              <a 
                href="https://www.facebook.com/SAINTHONDURAS" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-xl flex items-center justify-center transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/saint.hn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-xl flex items-center justify-center transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            
            
            
            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/50433663837" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-xl transition-colors duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#hero" className="text-gray-300 hover:text-white transition-colors duration-300">Inicio</a></li>
              <li><a href="#applications" className="text-gray-300 hover:text-white transition-colors duration-300">Aplicaciones</a></li>
              <li><a href="#benefits" className="text-gray-300 hover:text-white transition-colors duration-300">Beneficios</a></li>
              <li><a href="#clients" className="text-gray-300 hover:text-white transition-colors duration-300">Clientes</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors duration-300">Testimonios</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Email</p>
                  <a href="mailto:info@sainthn.com" className="text-white hover:text-blue-400 transition-colors duration-300">
                    info@sainthn.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Teléfono</p>
                  <a href="tel:+50433663837" className="text-white hover:text-green-400 transition-colors duration-300">
                    +504 3366-3837
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Ubicación</p>
                  <p className="text-white">Tegucigalpa, Honduras</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <h5 className="font-bold mb-3 flex items-center justify-center md:justify-start gap-2">
                <Smartphone className="w-5 h-5 text-blue-400 animate-bounce" />
                App Disponible
              </h5>
              {/* App Store Buttons */}
            <div className="space-y-3 mb-6">
              <a 
                href="https://apps.apple.com/us/app/saint-hn/id6502243579" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-black hover:bg-gray-800 text-white font-semibold px-4 py-3 rounded-xl transition-colors duration-300 w-full max-w-48"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Descargar en</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </a>
              
              <a 
                href="https://play.google.com/store/apps/details?id=app.saint" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-black hover:bg-gray-800 text-white font-semibold px-4 py-3 rounded-xl transition-colors duration-300 w-full max-w-48"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Disponible en</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </a>
            </div>
            </div>

            <div className="text-center">
              <h5 className="font-bold mb-3">Soporte 24/7</h5>
              <p className="text-gray-300">Asistencia técnica especializada disponible siempre</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 SAINTHN. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="/politicas-de-privacidad" className="text-gray-400 hover:text-white transition-colors duration-300">
                Políticas de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;