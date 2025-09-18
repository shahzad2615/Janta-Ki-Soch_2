import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import FileUpload from './FileUpload';
import { sendEmail, EmailData } from '../services/emailService';
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [attachments, setAttachments] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const emailData: EmailData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        attachments: attachments
      };

      const success = await sendEmail(emailData);

      if (success) {
        setSubmitStatus('success');
        setStatusMessage('धन्यवाद! तुमचा संदेश आम्हाला मिळाला आहे. आम्ही 24 तासांत संपर्क करू.');

        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setAttachments([]);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setStatusMessage('क्षमस्व! तुमचा संदेश पाठवताना त्रुटी आली. कृपया पुन्हा प्रयत्न करा किंवा थेट आमच्याशी संपर्क साधा.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFilesChange = (files: File[]) => {
    setAttachments(files);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">संपर्क साधा</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            तुमची तक्रार सोडवण्यासाठी तयार आहात का? आजच आमच्याशी संपर्क करा!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div>
            <div className="bg-gradient-to-br from-blue-600 to-teal-600 text-white rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">तुमचा आवाज महत्वाचा आहे!</h3>
              <p className="text-blue-100 mb-6">
                तो स्पष्ट आणि ठामपणे ऐकवला जाऊ द्या. उत्कर्ष तुमच्या मदतीसाठी आहे.
              </p>
              <p className="text-lg">
                आपण एकत्रितपणे आव्हानांचा सामना करू आणि सर्वांसाठी सुरक्षित, आनंदी आणि उत्तम समाज घडवू!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">फोन</h4>
                  <p className="text-gray-600">+91 9820047924</p>
                  <p className="text-sm text-gray-500">आपत्कालीन परिस्थितीत 24/7 उपलब्ध</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">ईमेल</h4>
                  <p className="text-gray-600 break-all">janatakisoch@utkarshglobalfoundation.org</p>
                  <p className="text-sm text-gray-500">24 तासांच्या आत उत्तर दिले जाईल</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">पत्ता</h4>
                  <p className="text-gray-600">
                    कॉर्पोरेट ऑफिस क्र. 501, 5 वा मजला, वासुदेव चेंबर्स,
                    सोनापूर सिग्नल जवळ, मुलुंड (प.), मुंबई, महाराष्ट्र, 400078.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 rounded-full p-3 flex-shrink-0">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">कार्यालयीन वेळा</h4>
                  <p className="text-gray-600">सोमवार - शुक्रवार: सकाळी 9:00 - संध्याकाळी 6:00</p>
                  <p className="text-gray-600">शनिवार: सकाळी 9:00 - दुपारी 2:00</p>
                  <p className="text-sm text-gray-500">आपत्कालीन मदत 24/7 उपलब्ध</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">आम्हाला संदेश पाठवा</h3>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-green-800 text-sm">{statusMessage}</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <p className="text-red-800 text-sm">{statusMessage}</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    तुमचं नाव *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="तुमचं पूर्ण नाव लिहा"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ईमेल पत्ता *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="तुमचा ईमेल लिहा"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    मोबाईल नंबर
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="मोबाईल नंबर लिहा"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    विषय
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">विषय निवडा</option>
                    <option value="General Inquiry">साधारण चौकशी</option>
                    <option value="Municipal Issues">महापालिका समस्या</option>
                    <option value="Women's Safety">महिला सुरक्षा</option>
                    <option value="Environmental Concerns">पर्यावरण विषयक समस्या</option>
                    <option value="Legal Guidance">कायदेशीर मार्गदर्शन</option>
                    <option value="Educational Sector">शैक्षणिक क्षेत्र</option>
                    <option value="Child Protection">बालसंरक्षण</option>
                    <option value="De-Addiction Support">व्यसनमुक्ती मदत</option>
                    <option value="Police Cases">पोलीस प्रकरणे</option>
                    <option value="Other">इतर</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  संदेश *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-colors"
                  placeholder="तुमची समस्या किंवा मदतीची आवश्यकता इथे लिहा..."
                />
              </div>

              {/* File Upload Section */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  संलग्न फाइल्स (ऐच्छिक)
                </label>
                <FileUpload
                  onFilesChange={handleFilesChange}
                  maxFiles={5}
                  maxSizePerFile={10}
                  acceptedTypes={['image/*', '.pdf', '.doc', '.docx', '.txt']}
                />
                <p className="text-xs text-gray-500 mt-1">
                  तुमच्या तक्रारीस समर्थन देण्यासाठी आवश्यक दस्तऐवज, फोटो किंवा पुरावे इथे जोडा.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    पाठवत आहे...
                  </>
                ) : (
                  <>
                    संदेश पाठवा
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            {/* Privacy Notice */}
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>गोपनीयता सूचना:</strong> तुमची माहिती व संलग्न फाइल्स गोपनीय ठेवल्या जातील.
                फक्त तुमच्या तक्रारीवर कार्यवाही करण्यासाठीच त्यांचा वापर होईल. 
                आम्ही सुरक्षित ईमेल सेवा वापरतो.
              </p>
            </div>
          </div>
        </div>

        {/* Complaint Form Section */}
        <div id="complaint-form" className="mt-20 bg-gradient-to-r from-[#d1ae6e] to-[#cd9f4c] rounded-xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">आता तुमची तक्रार नोंदवा</h3>
          <p className="text-xl text-orange-100 mb-8">
            तुमची तक्रार दुर्लक्षित होऊ देऊ नका. सोडवणुकीसाठी पहिलं पाऊल टाका.
          </p>
          <button 
            onClick={() => {
              const event = new CustomEvent('openComplaintForm');
              window.dispatchEvent(event);
            }}
            className="bg-white text-blue-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
          >
            तक्रार नोंदवा
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
