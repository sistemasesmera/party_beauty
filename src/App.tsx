import React from "react";
import MainLayout from "./layouts/MainLayout";
import HeroSection from "./components/Sections/HeroSection";
import Description from "./components/Sections/Description";
import Details from "./components/Sections/Details";
import WhatsAppButton from "./components/Floating/WhatsappButton";
import Album from "./components/Sections/Album";
import Contact from "./components/Sections/Contacto";
import { FaGift } from "react-icons/fa";

const App: React.FC = () => {
  return (
    <MainLayout>
      <div className="relative overflow-hidden">
        {/* Sección de Hero con Video de fondo */}
        <HeroSection />

        {/* Sección de ¿De qué va esto? */}
        <Description />
        <section className="bg-pink-100 border-l-4 border-pink-500 text-pink-700 p-6 mb-8 flex items-center">
          <div className="container mx-auto text-center flex flex-col items-center">
            {/* Icono */}
            <FaGift className="text-4xl mb-1 text-pink-600" />

            {/* Mensaje */}
            <h2 className="text-3xl font-bold">¡Aprovecha esta promoción!</h2>
            <p className="text-lg mb-2">
              Por el pago de <strong>10 personas</strong> a la Beauty Party, ¡te
              regalamos una entrada extra!
            </p>
            <p className="text-base">
              Aprovecha esta oferta para disfrutar aún más de tu evento y trae a
              tus amigos.
            </p>
          </div>
        </section>
        <Details />

        <Album />

        <Contact />
      </div>
      <WhatsAppButton
        whatsappNumber="+34608610122"
        message="¡Hola! Estoy interesado en una ESMERA BEAUTY PARTY."
      />
    </MainLayout>
  );
};

export default App;
