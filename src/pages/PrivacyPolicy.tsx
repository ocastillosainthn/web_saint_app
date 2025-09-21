import React from 'react';
import { ArrowLeft, Shield, Eye, Lock, Users, Globe, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Volver al inicio
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Política de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Privacidad</span>
          </h1>
          <p className="text-xl text-gray-300">
            Última actualización: 20 de enero de 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Eye className="w-6 h-6 text-blue-400" />
              1. Información que Recopilamos
            </h2>
            <p className="text-gray-300 mb-4">
              En SAINT, recopilamos la siguiente información para brindar nuestros servicios de control de acceso:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• <strong>Información personal:</strong> Nombre, correo electrónico, número de teléfono</li>
              <li>• <strong>Información de acceso:</strong> Registros de entrada y salida, códigos QR generados</li>
              <li>• <strong>Información del dispositivo:</strong> Tipo de dispositivo, sistema operativo, dirección IP</li>
              <li>• <strong>Información de ubicación:</strong> Ubicación del dispositivo cuando se utiliza la aplicación</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Lock className="w-6 h-6 text-green-400" />
              2. Cómo Utilizamos su Información
            </h2>
            <p className="text-gray-300 mb-4">
              Utilizamos la información recopilada para:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Proporcionar y mantener nuestros servicios de control de acceso</li>
              <li>• Generar códigos QR únicos y seguros para el acceso</li>
              <li>• Enviar notificaciones sobre el estado de acceso y seguridad</li>
              <li>• Mejorar la funcionalidad y seguridad de nuestra aplicación</li>
              <li>• Cumplir con obligaciones legales y regulatorias</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Users className="w-6 h-6 text-purple-400" />
              3. Compartir Información
            </h2>
            <p className="text-gray-300 mb-4">
              No vendemos, alquilamos ni compartimos su información personal con terceros, excepto en las siguientes circunstancias:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Con su consentimiento explícito</li>
              <li>• Para cumplir con obligaciones legales</li>
              <li>• Para proteger nuestros derechos y seguridad</li>
              <li>• Con proveedores de servicios que nos ayudan a operar nuestra plataforma</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Shield className="w-6 h-6 text-red-400" />
              4. Seguridad de Datos
            </h2>
            <p className="text-gray-300 mb-4">
              Implementamos medidas de seguridad técnicas y organizativas para proteger su información:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Encriptación de datos en tránsito y en reposo</li>
              <li>• Autenticación de dos factores</li>
              <li>• Monitoreo continuo de seguridad</li>
              <li>• Acceso limitado a datos personales</li>
              <li>• Auditorías regulares de seguridad</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Globe className="w-6 h-6 text-cyan-400" />
              5. Transferencias Internacionales
            </h2>
            <p className="text-gray-300">
              Sus datos pueden ser transferidos y procesados en países fuera de Honduras. Nos aseguramos de que estas transferencias cumplan con las leyes de protección de datos aplicables y que sus datos reciban un nivel adecuado de protección.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <h2 className="text-2xl font-bold mb-4">6. Sus Derechos</h2>
            <p className="text-gray-300 mb-4">
              Usted tiene los siguientes derechos respecto a sus datos personales:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• <strong>Acceso:</strong> Solicitar una copia de sus datos personales</li>
              <li>• <strong>Rectificación:</strong> Corregir datos inexactos o incompletos</li>
              <li>• <strong>Eliminación:</strong> Solicitar la eliminación de sus datos</li>
              <li>• <strong>Portabilidad:</strong> Recibir sus datos en un formato estructurado</li>
              <li>• <strong>Oposición:</strong> Oponerse al procesamiento de sus datos</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <h2 className="text-2xl font-bold mb-4">7. Retención de Datos</h2>
            <p className="text-gray-300">
              Conservamos sus datos personales solo durante el tiempo necesario para cumplir con los propósitos descritos en esta política, a menos que la ley requiera o permita un período de retención más largo.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <h2 className="text-2xl font-bold mb-4">8. Cookies y Tecnologías Similares</h2>
            <p className="text-gray-300">
              Utilizamos cookies y tecnologías similares para mejorar su experiencia, analizar el uso de nuestra aplicación y personalizar el contenido. Puede controlar el uso de cookies a través de la configuración de su navegador.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <h2 className="text-2xl font-bold mb-4">9. Cambios a esta Política</h2>
            <p className="text-gray-300">
              Podemos actualizar esta Política de Privacidad ocasionalmente. Le notificaremos sobre cambios significativos publicando la nueva política en nuestra aplicación y actualizando la fecha de "última actualización".
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl p-8 border border-blue-400/30">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Mail className="w-6 h-6 text-blue-400" />
              10. Contacto
            </h2>
            <p className="text-gray-300 mb-4">
              Si tiene preguntas sobre esta Política de Privacidad o sobre cómo manejamos sus datos personales, puede contactarnos:
            </p>
            <div className="space-y-2 text-gray-300">
              <p><strong>Email:</strong> <a href="mailto:privacy@sainthn.com" className="text-blue-400 hover:text-blue-300">privacy@sainthn.com</a></p>
              <p><strong>Teléfono:</strong> <a href="tel:+50433663837" className="text-blue-400 hover:text-blue-300">+504 3366-3837</a></p>
              <p><strong>Dirección:</strong> Tegucigalpa, Honduras</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;