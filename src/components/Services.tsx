import React from 'react';
import { 
  Building, 
  Shield, 
  Leaf, 
  Scale, 
  GraduationCap, 
  Baby, 
  HeartHandshake, 
  AlertTriangle,
  HelpCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building,
      title: 'महानगरपालिका समस्या',
      description: 'रस्त्यांची देखभाल, कचरा व्यवस्थापन, अनियमित पाणीपुरवठा आणि इतर नागरी सुविधा समस्या',
      image: 'https://media.assettype.com/freepressjournal/2024-06/f5237c09-ff65-4faa-a85e-63e37ba7f4b5/WhatsApp_Image_2024_06_15_at_11_32_21_AM.jpeg'
    },
    {
      icon: Shield,
      title: "महिलांची सुरक्षा",
      description: 'कामाच्या ठिकाणी लैंगिक छळ, घरगुती हिंसा आणि महिलांविरुद्धचे गुन्हे',
      image: 'https://dz01iyojmxk8t.cloudfront.net/wp-content/uploads/2019/12/05163310/files-india-assault-women_dbd75c92-ad70-11e8-8465-1eef8cfbb700.jpg'
    },
    {
      icon: Leaf,
      title: 'पर्यावरण विषयक चिंता',
      description: 'बेकायदेशीर वृक्षतोड, प्रदूषण, आणि पर्यावरण संरक्षणाशी संबंधित समस्या',
      image: 'https://static.vecteezy.com/system/resources/previews/013/339/218/original/deforestation-trees-stump-and-deforestation-background-forest-and-environment-global-warming-cutting-down-trees-environmental-pollution-and-ecological-problems-landscape-of-dead-nature-with-cut-vector.jpg'
    },
    {
      icon: Scale,
      title: 'कायदेशीर मार्गदर्शन',
      description: 'नागरी आणि फौजदारी प्रकरणांमध्ये कायदेशीर मदत आणि मार्गदर्शन',
      image: 'https://lawbhoomi.com/wp-content/uploads/2023/04/Lawyer.webp'
    },
    {
      icon: GraduationCap,
      title: 'शैक्षणिक क्षेत्र',
      description: 'शिक्षण प्रणाली, शाळा, आणि शैक्षणिक संस्थांशी संबंधित समस्या',
      image: 'https://th.bing.com/th/id/OIP.fFcQ_tmVnuuz_YsTHPkbFQHaE8?rs=1&pid=ImgDetMain'
    },
    {
      icon: Baby,
      title: 'बाल संरक्षण',
      description: 'बालकांवरील अत्याचार, सुरक्षा आणि कल्याणाशी संबंधित बाबी',
      image: 'https://th.bing.com/th/id/OIP.e1pb_86v9ZubopoB-L_aYgHaEI?rs=1&pid=ImgDetMain'
    },
    {
      icon: HeartHandshake,
      title: 'व्यसनमुक्ती सहाय्य',
      description: 'नशेच्या व्यसनातून मुक्त होण्यासाठी सहाय्य आणि पुनर्वसन कार्यक्रम',
      image: 'https://th.bing.com/th/id/OIP.SsxYJbQrJvBXoZCO_H9EGwHaEJ?rs=1&pid=ImgDetMain'
    },
    {
      icon: AlertTriangle,
      title: 'पोलीस प्रकरणे',
      description: 'पोलीस तक्रारी आणि कायद्याच्या अंमलबजावणीशी संबंधित मदत',
      image: 'https://media.licdn.com/dms/image/v2/D4D12AQFwqr3E-Y26Lg/article-cover_image-shrink_423_752/B4DZV.AC1wHIAU-/0/1741575696300?e=2147483647&v=beta&t=HLtP1QFTLvQcHrqxWfgOQENrForLHRKsPsNVFpbNmdc'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">आम्ही सोडविण्यास मदत करतो त्या समस्या</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            तुम्हाला यापैकी कोणत्याही क्षेत्रात मदतीची गरज असल्यास उत्कर्षकडे या
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* अतिरिक्त सहाय्य */}
        <div className="bg-gradient-to-r from-blue-600 to-[#2466e5] rounded-xl p-8 text-white text-center">
          <HelpCircle className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
          <h3 className="text-2xl font-bold mb-4">
            किंवा कोणतीही समस्या ज्यासाठी तुम्हाला मदतीची गरज आहे
          </h3>
          <p className="text-xl text-blue-100 mb-6">
            नागरिक म्हणून किंवा वैयक्तिकरित्या, आम्ही तुम्हाला सहाय्य करण्यासाठी येथे आहोत
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('complaint-form');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-[#cd9f4c] text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300"
          >
            तुमची तक्रार नोंदवा
          </button>
        </div>

        {/* सहभाग कसा घ्यावा */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            तुम्ही कसे सहभागी होऊ शकता?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-100 to-orange-200 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <img
                  src="https://images.pexels.com/photos/4467687/pexels-photo-4467687.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="ऑनलाइन तक्रार नोंदवणे"
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">तक्रार नोंदवा</h4>
              <p className="text-gray-600 mb-4">
                आमच्या ऑनलाइन फॉर्मद्वारे तुमची तक्रार नोंदवा. तुमची माहिती गोपनीय ठेवली जाईल.
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById('complaint-form');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#cd9f4c] text-white px-6 py-2 rounded-full font-medium hover:bg-blue-500 transition-colors"
              >
                तक्रार नोंदवा
              </button>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/003/720/476/non_2x/phone-icon-telephone-icon-symbol-for-app-and-messenger-vector.jpg"
                  alt="फोन सल्ला"
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">फोन करा किंवा लिहा</h4>
              <p className="text-gray-600 mb-4">
                तुम्हाला कोणत्याही समस्यांचा सामना करावा लागत असल्यास आणि त्वरित मदत हवी असल्यास आमच्याशी थेट संपर्क साधा.
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#cd9f4c] text-white px-6 py-2 rounded-full font-medium hover:bg-blue-500 transition-colors"
              >
                संपर्क तपशील
              </button>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-100 to-purple-200 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <img
                  src="https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="स्वयंसेवक"
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">स्वयंसेवक बना</h4>
              <p className="text-gray-600 mb-4">
                आमच्या उपक्रमांमध्ये स्वयंसेवक म्हणून सहभागी व्हा आणि समुदायाच्या समस्या सोडविण्यात योगदान द्या.
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#cd9f4c] text-white px-6 py-2 rounded-full font-medium hover:bg-blue-500 transition-colors"
              >
                सहभागी व्हा
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
