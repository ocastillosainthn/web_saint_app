import React from 'react';
import { MapPin, Users, Shield, CheckCircle } from 'lucide-react';

const Clients = () => {
  const clients = [
    {
      name: "Residencial San Sebastián",
      location: "Tegucigalpa",
      type: "Residencial Premium",
      units: "250+ Viviendas",
      image: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=500",
      features: ["Control de visitas 24/7", "Gestión de empleados domésticos", "Eventos sociales"]
    },
    {
      name: "Residencial Esquipulas",
      location: "San Pedro Sula",
      type: "Condominio Ejecutivo",
      units: "180+ Departamentos",
      image: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=500",
      features: ["Acceso QR inteligente", "Registro de proveedores", "Control vehicular"]
    }
  ];

  const stats = [
    { number: "200+", label: "Usuarios Activos", icon: Users },
    { number: "10K+", label: "Accesos Procesados", icon: CheckCircle },
    { number: "99.9%", label: "Tiempo de Actividad", icon: Shield }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Residenciales y empresas líderes que han transformado su seguridad con saint
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mb-20 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-white animate-pulse" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trusted By Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Confían en nosotros:</h3>
          <div className="grid grid-cols-2 gap-8 items-center max-w-md mx-auto">
            <div className="h-20 bg-white rounded-xl shadow-lg flex items-center justify-center p-4 border border-gray-100">
              <img 
                src="/clients/RSanSebastian.png" 
                alt="Residencial Villa San Sebastián" 
                className="max-h-12 max-w-full object-contain"
              />
            </div>
            <div className="h-20 bg-white rounded-xl shadow-lg flex items-center justify-center p-4 border border-gray-100">
              <img 
                src="/clients/espacio digital.jpeg" 
                alt="Espacio Digital" 
                className="max-h-12 max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;