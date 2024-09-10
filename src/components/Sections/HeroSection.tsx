import React from "react";
import videoSrc from "./../../assets/video.mov"; // Ruta al video
const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative h-screen">
      {/* Video de fondo */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videoSrc}
        autoPlay
        muted
        loop
      />
      {/* Capa de opacidad */}
      <div className="absolute inset-0 bg-black opacity-40" />

      {/* Contenido sobre el video */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-6xl font-bold mb-4">¡Esmera Beauty Party!</h1>
        <p className="text-2xl mb-8">
          Embellece, relájate y disfruta con tus amigas
        </p>
        <button className="px-6 py-3 bg-pink-300 text-white font-bold text-lg rounded-full hover:bg-pink-600 transition">
          RESERVA AHORA
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
