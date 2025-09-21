import React from 'react';
import { Building, Home, Calendar, Shield, QrCode, BarChart3 } from 'lucide-react';

const Applications = () => {
  const applications = [
    {
      icon: Home,
      title: "Residenciales y Condominios",
      description: "Control de visitas inteligente con códigos QR únicos para cada entrada",
      features: ["Control de visitas 24/7", "QR único por visita", "Registro automático", "Notificaciones en tiempo real"],
      image: "https://img.freepik.com/foto-gratis/carreteras-arquitectura-edificios-ciudad-turistica-vegetacion-tropical_627829-8258.jpg?auto=compress&cs=tinysrgb&w=500",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Building,
      title: "Empresas Corporativas",
      description: "Reuniones seguras y acceso controlado con tecnología QR avanzada",
      features: ["Acceso con código QR", "Gestión de reuniones", "Control de empleados", "Reportes detallados"],
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: Calendar,
      title: "Eventos y Conferencias",
      description: "Registro digital y control de asistentes con sistema QR profesional",
      features: ["Registro digital", "Control de asistentes", "Check-in automático", "Analytics en vivo"],
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=500",
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            ¿Dónde se aplica <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"> la app SAINT?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestra tecnología se adapta a cualquier entorno que requiera control de acceso inteligente y seguro
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <div key={index} className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={app.image} 
                  alt={app.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${app.gradient} opacity-80`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                    <app.icon className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{app.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{app.description}</p>

                <div className="space-y-3">
                  {app.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${app.gradient}`}></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Shield className="w-8 h-8 text-white animate-pulse" />
            </div>
            <h4 className="font-bold text-xl text-gray-900 mb-2">Máxima Seguridad</h4>
            <p className="text-gray-600">Códigos QR únicos e irrepetibles para cada visita o evento</p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <QrCode className="w-8 h-8 text-white animate-bounce" />
            </div>
            <h4 className="font-bold text-xl text-gray-900 mb-2">Tecnología QR</h4>
            <p className="text-gray-600">Sistema avanzado de códigos QR con validación en tiempo real</p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <BarChart3 className="w-8 h-8 text-white animate-pulse" />
            </div>
            <h4 className="font-bold text-xl text-gray-900 mb-2">Analytics Avanzado</h4>
            <p className="text-gray-600">Reportes detallados y estadísticas en tiempo real</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Applications;