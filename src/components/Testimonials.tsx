import React from 'react';
import { Star, Quote, User } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Hector Zambrano",
      role: "Residente - Villa de San Sebastián",
      avatar: "/testimonials/hector.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Desde que implementamos saint en nuestro residencial, la seguridad ha mejorado considerablemente. Ya no tenemos que preocuparnos por visitantes no autorizados. El sistema QR es increíblemente fácil de usar.",
      rating: 5,
      highlight: "Mayor seguridad"
    },
    {
      name: "Abner Días",
      role: "Director - Espacio Digital",
      avatar: "/testimonials/abner.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Las reuniones corporativas ahora son mucho más organizadas. El control de acceso con QR ha eliminado las largas filas y el registro manual. Nuestros clientes quedan impresionados con la tecnología.",
      rating: 5,
      highlight: "Facilidad para reuniones"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Testimonios reales de quienes han transformado su seguridad y organización con SAINT
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full"></div>
              
              {/* Quote icon */}
              <div className="relative mb-6">
                <Quote className="w-10 h-10 text-blue-500 opacity-20 absolute -top-2 -left-2" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Highlight badge */}
              <div className="inline-block bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                {testimonial.highlight}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-blue-100">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;