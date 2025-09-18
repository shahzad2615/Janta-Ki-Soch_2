import React from 'react';
import { Users, Target, Lock, Heart } from 'lucide-react';

const Mission = () => {
  const values = [
    {
      icon: Users,
      title: 'नागरिक-केंद्रित',
      description: 'तुमचा आवाज ऐकला जाईल, समस्या सोडवल्या जातील.'
    },
    {
      icon: Target,
      title: 'परिणामकेंद्रित',
      description: 'नियमित पाठपुराव्यासह खात्रीशीर निकाल.'
    },
    {
      icon: Lock,
      title: 'गोपनीय',
      description: 'तुमची माहिती सुरक्षित आणि गुप्त.'
    },
    {
      icon: Heart,
      title: 'समुदायाभिमुख',
      description: 'सामूहिक कृतीद्वारे सक्षम समाजनिर्मिती.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">आमचे ध्येय</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              जनता की सोच ही उत्कर्ष ग्लोबल फाउंडेशनची अनोखी योजना आहे, जी नागरिकांच्या नागरी, कायदेशीर व सामाजिक समस्यांचे निराकरण करण्यात मदत करते. आम्ही नागरिक आणि प्रशासन यांच्यातील दुवा म्हणून कार्य करतो, जेणेकरून समस्या लवकर सोडवल्या जातील.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-gradient-to-r from-blue-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                {value.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Image and Additional Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="समुदाय बैठक आणि नागरी सहभाग"
              className="rounded-xl shadow-lg w-full h-64 lg:h-80 object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="bg-gradient-to-r from-blue-800 to-teal-700 text-white rounded-xl p-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">१०००+</div>
                <div className="text-xl">नागरिकांना मदत</div>
                <p className="mt-4 text-blue-100">
                  हजारो नागरिकांना आमच्या सहाय्याने त्यांचे प्रश्न सोडवण्यात मदत झाली आहे.
                  तुम्हीदेखील या उपक्रमाचा भाग बना.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
