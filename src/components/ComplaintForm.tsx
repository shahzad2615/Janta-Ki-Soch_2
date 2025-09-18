import React from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ComplaintForm: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">तक्रार फॉर्म</h2>
        <p className="mb-6">
          खालील बटणावर क्लिक केल्यावर तुम्हाला आमच्या अधिकृत Google तक्रार फॉर्मकडे नेले जाईल.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdOJo273NH8GL5g8LvFtwGXI7MzsqJjLNql1a7GX_vJcd6uGQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition mr-4"
        >
          फॉर्म उघडा
        </a>
        <button
          onClick={onClose}
          className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition"
        >
          रद्द करा
        </button>
      </div>
    </div>
  );
};

export default ComplaintForm;
