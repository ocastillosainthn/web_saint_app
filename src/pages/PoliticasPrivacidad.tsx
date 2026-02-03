import React from 'react';
import { ArrowLeft, Shield, Eye, Lock, MapPin, Camera, Server, UserCheck, Mail } from 'lucide-react';

const PoliticasPrivacidad = () => {
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
            Política de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Privacidad</span> de SAINT
          </h1>
          <p className="text-xl text-gray-300">
            Última actualización: 3 de febrero de 2026
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
          <p className="text-gray-300 text-lg leading-relaxed">
            En SAINT, la privacidad de nuestros usuarios es una prioridad. Esta Política de Privacidad describe cómo recopilamos, usamos y protegemos su información, específicamente en relación con nuestros servicios de control de visitas, rondas de seguridad y gestión de eventos.
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
              Para el correcto funcionamiento de la plataforma, SAINT puede recopilar los siguientes datos:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• <strong>Información de Registro:</strong> Nombre, correo electrónico y credenciales de acceso.</li>
              <li>• <strong>Datos de Ubicación (Location):</strong> Recopilamos datos de ubicación exacta y aproximada.</li>
              <li>• <strong>Cámara:</strong> Acceso necesario para el escaneo de códigos QR y evidencias en las rondas.</li>
              <li>• <strong>Información del Dispositivo:</strong> Modelo de hardware y versión del sistema operativo.</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <MapPin className="w-6 h-6 text-green-400" />
              2. Uso Exhaustivo de los Datos de Ubicación
            </h2>
            <p className="text-gray-300 mb-4">
              SAINT recopila y utiliza datos de ubicación para habilitar funciones críticas de seguridad, incluso cuando la aplicación está cerrada o no está en uso (ubicación en segundo plano).
            </p>
            <p className="text-gray-300 mb-4">
              Los datos de ubicación se utilizan específicamente para:
            </p>
            <ul className="text-gray-300 space-y-2 mb-4">
              <li>• <strong>Sistema de Control de Rondas:</strong> Validar que el personal de seguridad se encuentra físicamente en los puntos de control marcados con QR durante sus recorridos.</li>
              <li>• <strong>Verificación de Marcajes:</strong> Asegurar que los registros de entrada y salida de visitas o asistentes a eventos ocurran dentro del perímetro geográfico autorizado.</li>
              <li>• <strong>Seguridad del Personal:</strong> Permitir el monitoreo en tiempo real del guardia "en camino" para brindar asistencia inmediata en caso de emergencia.</li>
            </ul>
            <div className="bg-blue-600/20 border border-blue-400/30 rounded-xl p-4">
              <p className="text-blue-200 text-sm">
                <strong>Nota:</strong> Los datos de ubicación recopilados se utilizan exclusivamente para fines operativos y de seguridad del servicio contratado. No compartimos ni vendemos estos datos a terceros con fines publicitarios.
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Camera className="w-6 h-6 text-purple-400" />
              3. Uso de la Cámara
            </h2>
            <p className="text-gray-300 mb-4">
              La aplicación solicita permiso para utilizar la cámara del dispositivo con el único propósito de escanear códigos QR. Esto es fundamental para:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Registrar el ingreso de visitas en casetas de vigilancia.</li>
              <li>• Validar la asistencia a eventos.</li>
              <li>• Confirmar el paso por puntos de control en las rondas de guardia.</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Server className="w-6 h-6 text-red-400" />
              4. Almacenamiento y Protección de Datos
            </h2>
            <p className="text-gray-300">
              Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos contra el acceso no autorizado, la pérdida o la alteración. Los datos se transmiten de forma cifrada a nuestros servidores seguros.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Lock className="w-6 h-6 text-yellow-400" />
              5. Retención de Datos
            </h2>
            <p className="text-gray-300">
              Conservamos la información personal solo durante el tiempo necesario para cumplir con los propósitos descritos en esta política o para cumplir con requisitos legales y de auditoría de seguridad.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <UserCheck className="w-6 h-6 text-cyan-400" />
              6. Derechos del Usuario
            </h2>
            <p className="text-gray-300 mb-4">
              Usted tiene derecho a:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Acceder, rectificar o eliminar sus datos personales.</li>
              <li>• Revocar los permisos de ubicación y cámara desde la configuración de su dispositivo (tenga en cuenta que esto puede limitar las funciones principales de la app).</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl p-8 border border-blue-400/30">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Mail className="w-6 h-6 text-blue-400" />
              7. Contacto
            </h2>
            <p className="text-gray-300 mb-4">
              Si tiene preguntas sobre esta política, puede contactarnos en:
            </p>
            <div className="space-y-2 text-gray-300">
              <p><strong>Correo electrónico:</strong> <a href="mailto:info@sainthn.com" className="text-blue-400 hover:text-blue-300">info@sainthn.com</a></p>
              <p><strong>Sitio Web:</strong> <a href="https://saint.sainthn.com" className=\"text-blue-400 hover:text-blue-300">saint.sainthn.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliticasPrivacidad;