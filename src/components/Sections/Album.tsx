import React, { useState, useEffect } from "react";
import { FaCameraRetro, FaArrowDown } from "react-icons/fa"; // Iconos de cámara retro y flecha hacia abajo

// Rutas a las imágenes en la carpeta 'assets'
import image1 from "../../assets/cuadrada.png";
import image2 from "../../assets/cuadrada.png";
import image3 from "../../assets/cuadrada.png";
import image4 from "../../assets/cuadrada.png";

const images = [
  image1,
  image2,
  image3,
  image4,
  image4,
  image4 /* añade más imágenes aquí */,
  image1,
  image2,
  image3,
  image4,
  image4,
  image1,
  image2,
  image3,
  image4,
  image4,
];

const ImageCard: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden relative group aspect-w-1 aspect-h-1">
      <img
        src={src}
        alt={alt}
        className="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <FaCameraRetro className="text-white text-4xl" />
      </div>
    </div>
  );
};

const Album: React.FC = () => {
  const [visibleImages, setVisibleImages] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // 1024px es el breakpoint para `lg` en Tailwind CSS
        setVisibleImages(9);
      } else {
        setVisibleImages(3);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const loadMoreImages = () => {
    setVisibleImages((prev) => prev + (window.innerWidth >= 1024 ? 9 : 3)); // Aumenta el número de imágenes visibles
  };

  return (
    <section
      id="album"
      className="relative px-4 py-16 md:py-24 bg-[#f9f9f9] text-[#451a52]"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Nuestro Álbum de Recuerdos
        </h2>
        <p className="text-base md:text-lg mb-8">
          Echa un vistazo a los momentos especiales de nuestras anteriores
          fiestas. Aquí verás cómo hemos transformado eventos en experiencias
          inolvidables.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.slice(0, visibleImages).map((src, index) => (
            <ImageCard
              key={index}
              src={src}
              alt={`Imagen del álbum ${index + 1}`}
            />
          ))}
        </div>
        {visibleImages < images.length && (
          <div className=" flex justify-center">
            <button
              onClick={loadMoreImages}
              className="mt-8 px-6 py-3 bg-white border-2 border-[#451a52] text-[#451a52] rounded-lg flex items-center justify-center gap-2 hover:bg-[#f2f2f2] transition-colors duration-300"
            >
              <FaArrowDown className="text-lg" />
              <span>Ver Más</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Album;
