import React from "react";
import beautyImage from "./../../assets/cuadrada.png"; // Importa tu imagen
import { FaMapMarkerAlt } from "react-icons/fa";
import "./Description.css";

const Description: React.FC = () => {
  return (
    <section
      id="description"
      className="relative px-4 py-16 md:py-24 flex flex-col md:flex-row items-center justify-center text-[#451a52] bg-[#f9f9f9] space-y-6 md:space-y-0 md:space-x-28"
    >
      {/* Imagen a la izquierda en pantallas medianas y grandes */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0">
        <img
          src={beautyImage}
          alt="Detalles del Evento"
          className="rounded-lg shadow-lg max-w-full h-auto border border-gray-300"
        />
      </div>

      {/* Texto a la derecha */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">
          El Arte del{" "}
          <span className="animate-line relative inline-block">
            <span className="relative z-10">Maquillaje</span>
          </span>{" "}
          en Fiesta
        </h2>

        <p className="text-base md:text-xl max-w-lg mb-4">
          En <b>Esmera Beauty Party</b>, ofrecemos una experiencia única donde
          un profesional del maquillaje embellece a la protagonista del evento.
          Los/as invitados/as disfrutan de un catering especial y reciben
          orientación para su propio automaquillaje. ¡Captura momentos
          especiales en un ambiente festivo y elegante!
        </p>
        <p className="text-base md:text-xl max-w-lg mb-4">
          <strong>Incluye:</strong> Material de maquillaje, catering con bebidas
          y aperitivos, y decoración personalizada para el evento.
        </p>

        <p className="text-base md:text-xl max-w-lg mb-6">
          <strong>Ideal para:</strong> Cumpleaños, despedidas de soltera y
          reuniones de amigas/os.
        </p>

        <div className="flex items-center space-x-3">
          <FaMapMarkerAlt className="text-2xl md:text-3xl text-green-600" />
          <div>
            <p className="text-lg md:text-xl">
              Paseo Santa María de la Cabeza, 10. Madrid
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
