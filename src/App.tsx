import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Process from './components/Process';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ComplaintForm from './components/ComplaintForm';

function App() {
   const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const openHandler = () => setShowForm(true);
    window.addEventListener('openComplaintForm', openHandler);
    return () => window.removeEventListener('openComplaintForm', openHandler);
  }, []);
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Mission />
      <Process />
      <Services />
      <Contact />
      <Footer />
     <ComplaintForm
          isOpen={showForm}
          onClose={() => setShowForm(false)}
        />
    </div>
  );
}

export default App;
