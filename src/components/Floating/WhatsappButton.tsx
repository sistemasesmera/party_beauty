import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Importa el icono de WhatsApp de react-icons

interface WhatsAppButtonProps {
  whatsappNumber: string;
  message: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ whatsappNumber, message }) => {

  const handleClick = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={handleClick}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110"
        aria-label="Contáctanos por WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8" /> {/* Usa el icono de WhatsApp */}
      </button>
    </div>
  );
};

export default WhatsAppButton;
