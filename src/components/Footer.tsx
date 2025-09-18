import React from 'react';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">जनता की सोच</h3>
              <p className="text-lg text-gray-300">Janata Ki Soch</p>
              <p className="text-sm text-gray-400">उत्कर्ष ग्लोबल फाउंडेशनचा उपक्रम</p>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              नागरिकांच्या नागरी, कायदेशीर किंवा सामाजिक समस्या सोडवण्यासाठी एक अनोखी पुढाकार. 
              उत्कर्ष हा नागरिक आणि शासन यांच्यामध्ये दुवा म्हणून काम करतो, ज्यामुळे आमच्या ६-टप्प्यांच्या 
              प्रणालीबद्ध प्रक्रियेद्वारे तक्रारींचे जलद निराकरण सुनिश्चित केले जाते.
            </p>
            <div className="flex items-center text-blue-500">
              <Heart className="w-5 h-5 mr-2" />
              <span className="font-semibold">उत्कर्ष नेहमी तुमच्यासोबत आहे!</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">त्वरित दुवे</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  मुख्यपृष्ठ
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  आमच्याबद्दल
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('process')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  आमची प्रक्रिया
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  सेवा
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  संपर्क
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">संपर्क माहिती</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Phone className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+91 9820047924</p>
                  <p className="text-sm text-gray-400">२४/७ आपत्कालीन सहाय्य</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm break-all">
                    janatakisoch@utkarshglobalfoundation.org
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    कॉर्पोरेट ऑफिस नं. ५०१, ५वा मजला, वासुदेव चेंबर्स,  
                    सोनापूर सिग्नल जवळ, मुलुंड (पश्चिम), मुंबई, महाराष्ट्र, ४०००७८.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-500 mb-1">१०००+</div>
              <div className="text-gray-300">नागरिकांना मदत</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-500 mb-1">१००%</div>
              <div className="text-gray-300">पूर्ण गोपनीयता</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-500 mb-1">२४/७</div>
              <div className="text-gray-300">सतत सहाय्य</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-500 mb-1">६</div>
              <div className="text-gray-300">सोप्या टप्प्यांत प्रक्रिया</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <h4 className="text-xl font-semibold mb-4">तुमचा आवाज पोहोचवण्यासाठी तयार आहात का?</h4>
          <button
            onClick={() => {
              const event = new CustomEvent('openComplaintForm');
              window.dispatchEvent(event);
            }}
            className="bg-gradient-to-r from-[#cd9f4c] to-[#d1ae6e] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            तक्रार नोंदवा
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © २०२४ उत्कर्ष ग्लोबल फाउंडेशन. सर्व हक्क राखीव.
            </div>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                गोपनीयता धोरण
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                सेवा अटी
              </a>
              <div className="flex items-center text-gray-400 text-sm">
                लोकांसाठी <Heart className="w-4 h-4 mx-1 text-red-400" /> प्रेमाने बनवले
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
