import React from 'react';
import { FileText, Users, Search, Phone, Eye, CheckCircle } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: '1',
      icon: FileText,
      title: 'तक्रार स्वीकारणे',
      description: 'ऑनलाईन फॉर्मद्वारे किंवा थेट संपर्क साधून तक्रार नोंदवा'
    },
    {
      number: '2',
      icon: Users,
      title: 'टीम भेट',
      description: 'आमची टीम तुमच्या परिसराला भेट देईल किंवा वैयक्तिकरित्या तुमची भेट घेईल'
    },
    {
      number: '3',
      icon: Search,
      title: 'संशोधन व नियोजन',
      description: 'समस्येचे विश्लेषण करून उपाययोजना तयार केल्या जातील'
    },
    {
      number: '4',
      icon: Phone,
      title: 'अधिकाऱ्यांशी संपर्क',
      description: 'तुमच्या वतीने आम्ही संबंधित विभागाशी संवाद साधतो'
    },
    {
      number: '5',
      icon: Eye,
      title: 'पाठपुरावा',
      description: 'सातत्याने देखरेख व नियमित फॉलो-अप केला जातो'
    },
    {
      number: '6',
      icon: CheckCircle,
      title: 'अंतिम निराकरण',
      description: 'तक्रार पूर्णपणे सोडवली जाईल याची खात्री केली जाते'
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">आमची प्रक्रिया</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ६-टप्प्यांत तक्रार निवारण करण्याची आमची प्रणाली
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                {step.number}
              </div>

              {/* Icon */}
              <div className="bg-gradient-to-r from-blue-100 to-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mt-4 group-hover:scale-110 transition-transform duration-300">
                <step.icon className="w-8 h-8 text-blue-600" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#2466e5] to-[#2466e5] rounded-xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-white mb-4">
              प्रक्रिया सुरू करण्यास तयार आहात का?
            </h3>
            <p className="text-white mb-6">
              आमची समर्पित टीम तुमच्या तक्रारीच्या सोडवणुकीच्या प्रत्येक टप्प्यावर मार्गदर्शन करण्यासाठी येथे आहे.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('complaint-form');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-[#d1ae6e] to-[#cd9f4c] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              तुमची तक्रार नोंदवा
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
