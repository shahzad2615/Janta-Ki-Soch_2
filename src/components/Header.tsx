import React, { useState } from 'react';
import { Menu, X, Phone, Mail, Globe } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Language Switcher
  const handleLanguageChange = (lang: string) => {
    if (lang === 'mr') {
      window.location.href = 'https://janta-ki-soch-2.vercel.app/';
    } else {
      window.location.href = 'https://janta-ki-soch.vercel.app/';
    }
  };

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-blue-800 to-teal-700 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>+91 9820047924</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="w-4 h-4" />
                <span>janatakisoch@utkarshglobalfoundation.org</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span className="font-medium">उत्कर्ष तुमच्यासाठी आहे!</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img src="/janta.png" alt="" className="w-20 h-20 object-contain" />
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-teal-700 bg-clip-text text-transparent">
              जनता की सोच
            </div>
            <div className="ml-2 text-sm text-gray-600">
              <div>Janata Ki Soch</div>
              <div className="text-xs">उत्कर्ष ग्लोबल फाउंडेशनतर्फे</div>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-800 font-medium transition-colors">
              मुखपृष्ठ
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-800 font-medium transition-colors">
              आमच्याबद्दल
            </button>
            <button onClick={() => scrollToSection('process')} className="text-gray-700 hover:text-blue-800 font-medium transition-colors">
              प्रक्रिया
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-800 font-medium transition-colors">
              सेवा
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-800 font-medium transition-colors">
              संपर्क
            </button>

            {/* CTA + Language side by side */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => scrollToSection('complaint-form')}
                className="bg-gradient-to-r from-blue-800 to-teal-700 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                तक्रार नोंदवा
              </button>

              {/* Language Picker */}
              <div className="flex items-center space-x-2 border rounded-full px-3 py-1 text-sm text-gray-700">
                <Globe className="w-4 h-4 text-gray-600" />
                <button onClick={() => handleLanguageChange('en')} className="hover:text-blue-800">
                  English
                </button>
                <span>|</span>
                <button onClick={() => handleLanguageChange('mr')} className="hover:text-blue-800">
                  मराठी
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-blue-800">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mb-4">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-800 font-medium">
                मुखपृष्ठ
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-800 font-medium">
                आमच्याबद्दल
              </button>
              <button onClick={() => scrollToSection('process')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-800 font-medium">
                प्रक्रिया
              </button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-800 font-medium">
                सेवा
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-800 font-medium">
                संपर्क
              </button>
              <button
                onClick={() => scrollToSection('complaint-form')}
                className="block w-full text-left px-3 py-2 bg-gradient-to-r from-blue-800 to-teal-700 text-white rounded-lg font-medium mt-2"
              >
                तक्रार नोंदवा
              </button>

              {/* Language Picker Mobile */}
              <div className="flex justify-center items-center space-x-3 mt-4 bg-gray-100 rounded-lg p-2">
                <Globe className="w-5 h-5 text-gray-600" />
                <button onClick={() => handleLanguageChange('en')} className="text-gray-700 hover:text-blue-800 font-medium">
                  English
                </button>
                <span>|</span>
                <button onClick={() => handleLanguageChange('mr')} className="text-gray-700 hover:text-blue-800 font-medium">
                  मराठी
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
