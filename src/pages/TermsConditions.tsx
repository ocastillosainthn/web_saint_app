import React from 'react';
import { ArrowLeft, FileText, Scale, Shield, AlertTriangle, CheckCircle, Globe } from 'lucide-react';

const TermsConditions = () => {
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
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
            <Scale className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Términos y <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Condiciones</span>
          </h1>
          <p className="text-xl text-gray-300">
            Última actualización: 20 de enero de 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <FileText className="w-6 h-6 text-blue-400" />
              1. Aceptación de los Términos
            </h2>
            <p className="text-gray-300">
              Al acceder y utilizar la aplicación SAINT y sus servicios, usted acepta estar sujeto a estos Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros servicios.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              2. Descripción del Servicio
            </h2>
            <p className="text-gray-300 mb-4">
              SAINT es una plataforma de control de acceso que utiliza tecnología QR para:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Gestionar el acceso a residenciales, condominios y empresas</li>
              <li>• Generar códigos QR únicos y seguros</li>
              <li>• Proporcionar registros y análisis de acceso</li>
              <li>• Facilitar la organización de eventos</li>
              <li>• Ofrecer notificaciones en tiempo real</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Shield className="w-6 h-6 text-purple-400" />
              3. Registro y Cuenta de Usuario
            </h2>
            <p className="text-gray-300 mb-4">
              Para utilizar nuestros servicios, debe:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Proporcionar información precisa y completa durante el registro</li>
              <li>• Mantener la confidencialidad de sus credenciales de acceso</li>
              <li>• Notificar inmediatamente cualquier uso no autorizado de su cuenta</li>
              <li>• Ser responsable de todas las actividades que ocurran bajo su cuenta</li>
              <li>• Tener al menos 18 años de edad o contar con autorización parental</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-400" />
              4. Uso Aceptable
            </h2>
            <p className="text-gray-300 mb-4">
              Al utilizar SAINT, usted se compromete a NO:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Utilizar el servicio para actividades ilegales o no autorizadas</li>
              <li>• Intentar acceder a sistemas o datos sin autorización</li>
              <li>• Interferir con el funcionamiento normal del servicio</li>
              <li>• Compartir códigos QR con personas no autorizadas</li>
              <li>• Realizar ingeniería inversa o intentar descifrar nuestro software</li>
              <li>• Transmitir virus, malware o código malicioso</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <h2 className="text-2xl font-bold mb-4">5. Propiedad Intelectual</h2>
            <p className="text-gray-300 mb-4">
              Todos los derechos de propiedad intelectual relacionados con SAINT, incluyendo pero no limitado a:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Software, código fuente y algoritmos</li>
              <li>• Marcas comerciales, logos y nombres comerciales</li>
              <li>• Contenido, diseños y interfaces de usuario</li>
              <li>• Documentación y materiales de capacitación</li>
            </ul>
            <p className="text-gray-300 mt-4">
              Son propiedad exclusiva de SAINT y están protegidos por las leyes de propiedad intelectual aplicables.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <h2 className="text-2xl font-bold mb-4">6. Privacidad y Protección de Datos</h2>
            <p className="text-gray-300">
              El manejo de sus datos personales se rige por nuestra Política de Privacidad, que forma parte integral de estos términos. Al utilizar nuestros servicios, usted consiente el procesamiento de sus datos según se describe en dicha política.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <h2 className="text-2xl font-bold mb-4">7. Disponibilidad del Servicio</h2>
            <p className="text-gray-300 mb-4">
              Nos esforzamos por mantener nuestros servicios disponibles 24/7, sin embargo:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Pueden ocurrir interrupciones por mantenimiento programado</li>
              <li>• No garantizamos disponibilidad ininterrumpida del servicio</li>
              <li>• Nos reservamos el derecho de modificar o discontinuar funcionalidades</li>
              <li>• Proporcionaremos notificación previa de cambios significativos</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <h2 className="text-2xl font-bold mb-4">8. Limitación de Responsabilidad</h2>
            <p className="text-gray-300 mb-4">
              En la máxima medida permitida por la ley:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• SAINT no será responsable por daños indirectos, incidentales o consecuentes</li>
              <li>• Nuestra responsabilidad total no excederá el monto pagado por los servicios</li>
              <li>• No garantizamos que el servicio sea libre de errores o interrupciones</li>
              <li>• El usuario es responsable de implementar medidas de seguridad adicionales</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <h2 className="text-2xl font-bold mb-4">9. Terminación</h2>
            <p className="text-gray-300 mb-4">
              Podemos terminar o suspender su acceso a nuestros servicios:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Inmediatamente, por violación de estos términos</li>
              <li>• Con 30 días de aviso, por razones comerciales</li>
              <li>• Sin previo aviso, si se requiere por ley</li>
            </ul>
            <p className="text-gray-300 mt-4">
              Usted puede terminar su cuenta en cualquier momento contactándonos.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Globe className="w-6 h-6 text-cyan-400" />
              10. Ley Aplicable y Jurisdicción
            </h2>
            <p className="text-gray-300">
              Estos términos se rigen por las leyes de Honduras. Cualquier disputa será resuelta en los tribunales competentes de Tegucigalpa, Honduras. Para usuarios internacionales, se aplicarán las leyes locales de protección al consumidor cuando corresponda.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <h2 className="text-2xl font-bold mb-4">11. Modificaciones</h2>
            <p className="text-gray-300">
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios significativos serán notificados con al menos 30 días de anticipación. El uso continuado de nuestros servicios después de las modificaciones constituye su aceptación de los nuevos términos.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <h2 className="text-2xl font-bold mb-4">12. Disposiciones Generales</h2>
            <ul className="text-gray-300 space-y-2">
              <li>• Si alguna disposición es inválida, el resto permanece en vigor</li>
              <li>• Estos términos constituyen el acuerdo completo entre las partes</li>
              <li>• No crear una relación de sociedad o agencia</li>
              <li>• Los títulos de las secciones son solo para referencia</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-400/30">
            <h2 className="text-2xl font-bold mb-4">13. Contacto</h2>
            <p className="text-gray-300 mb-4">
              Para preguntas sobre estos Términos y Condiciones, puede contactarnos:
            </p>
            <div className="space-y-2 text-gray-300">
              <p><strong>Email:</strong> <a href="mailto:legal@sainthn.com" className="text-purple-400 hover:text-purple-300">legal@sainthn.com</a></p>
              <p><strong>Teléfono:</strong> <a href="tel:+50433663837" className="text-purple-400 hover:text-purple-300">+504 3366-3837</a></p>
              <p><strong>Dirección:</strong> Tegucigalpa, Honduras</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;