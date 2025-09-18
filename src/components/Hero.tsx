import React from 'react';
import { ArrowRight, Users, Shield, Heart } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700" />
      <div
        className="absolute inset-0 opacity-20 bg-center bg-cover"
        style={{ backgroundImage: "url('/home.JPG')" }}
      />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left */}
          <div className="w-full lg:w-1/2 text-white text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="block">जनता की सोच</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl mt-1 text-blue-200">
                Janata Ki Soch
              </span>
            </h1>
            <p className="text-base sm:text-lg mb-4 text-blue-100">
              उत्कर्ष ग्लोबल फाउंडेशनची जनमत मोहीम
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 mb-6">
              <h2 className="text-lg sm:text-xl font-semibold mb-2 text-cyan-500">
                उत्कर्ष तुमच्यासाठी आहे!
              </h2>
              <p className="text-sm sm:text-base text-blue-100">
                नागरिकांना त्यांच्या तक्रारी मांडण्याचे आवाहन!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button
                onClick={() => scrollToSection('complaint-form')}
                className="bg-[#d1ae6e] text-white px-6 sm:px-8 py-3 rounded-full font-semibold text-base sm:text-lg hover:shadow-xl transition transform hover:scale-105 flex items-center justify-center group"
              >
                तक्रार नोंदवा
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 motion-reduce:transform-none transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-blue-800 transition"
              >
                आमच्याशी संपर्क साधा
              </button>
            </div>
          </div>

          {/* Right Stats */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            {[
              { Icon: Users, value: '१०००+', label: 'नागरिकांना मदत', color: 'text-green-300' },
              { Icon: Shield, value: '१००%', label: 'पूर्ण गोपनीयता', color: 'text-green-300' },
              { Icon: Heart, value: '२४/७', label: 'सतत सहाय्य', color: 'text-green-300' },
              { Icon: Shield, value: '६', label: 'टप्प्यांची प्रक्रिया', color: 'text-green-300' },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center text-white"
              >
                {s.Icon && (
                  <s.Icon
                    className={`w-8 sm:w-10 h-8 sm:h-10 mx-auto mb-2 ${s.color}`}
                  />
                )}
                <div className="text-xl sm:text-2xl font-bold mb-1">
                  {s.value}
                </div>
                <div className="text-xs sm:text-sm text-blue-100">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
