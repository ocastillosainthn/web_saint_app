import React from 'react';
import { Shield, BarChart3, Zap, Users, Clock, Star } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Seguridad Reforzada",
      description: "QR único para cada visita con encriptación de nivel bancario",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: BarChart3,
      title: "Tablero Estadístico",
      description: "Visualiza entradas, salidas y eventos en tiempo real",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Optimización de Eventos",
      description: "Organiza eventos de manera eficiente y profesional",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Experiencia Moderna",
      description: "Interfaz intuitiva para residentes, visitantes y empresas",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Clock,
      title: "Tiempo Real",
      description: "Notificaciones instantáneas y seguimiento en vivo",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Star,
      title: "Confiabilidad Total",
      description: "99.9% de tiempo activo con soporte 24/7",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Bondades y <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Beneficios</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre por qué miles de residenciales, empresas y organizadores de eventos confían en SAINT
          </p>
        </div>

        {/* Main Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/10">
              <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="w-8 h-8 text-white group-hover:animate-pulse" />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Feature Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">
              La tecnología más avanzada en 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> control de acceso</span>
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-4 h-4 text-white animate-pulse" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Códigos QR Inteligentes</h4>
                  <p className="text-gray-300">Cada código QR es único, temporal y cuenta con múltiples capas de seguridad para evitar falsificaciones.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-4 h-4 text-white animate-bounce" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Dashboard Completo</h4>
                  <p className="text-gray-300">Monitorea todas las actividades con gráficos en tiempo real, reportes detallados y métricas avanzadas.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-4 h-4 text-white animate-pulse" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Automatización Total</h4>
                  <p className="text-gray-300">Procesos completamente automatizados que reducen errores humanos y optimizan tiempos de respuesta.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <img 
                src="assets/dashboard.png"
                alt="Dashboard analytics"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            {/* Floating elements */}
            {/* <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
              <Shield className="w-10 h-10 text-white animate-spin" />
            </div>*/}
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg animate-bounce">
              <BarChart3 className="w-8 h-8 text-white animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;