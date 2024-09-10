import React from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa"; // Iconos de correo electrónico, WhatsApp y ubicación

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-[#f9f9f9] text-[#451a52]">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Cómo contactarnos...
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {/* Columna de Correo Electrónico */}
          <div className="bg-white p-12 rounded-lg shadow-lg flex items-center space-x-4 flex-grow md:flex-grow-0 md:w-1/3">
            <FaEnvelope className="text-5xl text-[#451a52] m-2" />
            <div>
              <h3 className="text-2xl font-semibold mb-2">Nuestro Correo</h3>
              <p className="text-lg">Por si lo necesitas:</p>
              <p className="text-xl font-medium text-green-600">
                hola@prueba.com
              </p>
            </div>
          </div>

          {/* Columna de WhatsApp */}
          <div className="bg-white p-12 rounded-lg shadow-lg flex items-center space-x-4 flex-grow md:flex-grow-0 md:w-1/3">
            <FaWhatsapp className="text-5xl text-[#451a52] m-2" />
            <div>
              <h3 className="text-2xl font-semibold mb-2">Nuestro WhatsApp</h3>
              <p className="text-lg">Estamos aquí para atenderte</p>
              <p className="text-xl font-medium text-green-600">
                +34 454 32 546
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
