import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "antd";
import {
  MenuOutlined,
  CloseOutlined,
  FacebookOutlined,
  InstagramOutlined,
  TikTokOutlined,
} from "@ant-design/icons";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = [
    { name: "Inicio", href: "#home" },
    { name: "Descripcion", href: "#description" },
    { name: "Precios", href: "#details" },
    { name: "Reserva", href: "#details" },
    { name: "Album", href: "#album" },
  ];

  const handleMouseEnter = (item: string) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div>
      {/* Franja Roja para Desktop */}
      <motion.div
        className={`fixed top-0 left-0 w-full bg-transparent text-white h-16 flex items-center justify-between px-4 z-50 ${
          isScrolled ? "bg-pink-300 text-white" : ""
        }`}
        initial={{ y: 0 }}
        animate={{ y: isScrolled ? "-100%" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="hidden md:flex flex-1 justify-center items-center space-x-4">
          {/* Iconos de Redes Sociales */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FacebookOutlined style={{ fontSize: 20 }} />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <TikTokOutlined style={{ fontSize: 20 }} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <InstagramOutlined style={{ fontSize: 20 }} />
          </a>
        </div>

        <div className="hidden md:block flex-1 text-center">
          {/* Logo o texto aquí */}
          <div className="text-xl font-bold text-white">ESMERA SCHOOL</div>
        </div>

        <div className="hidden md:flex flex-1 justify-center items-center">
          {/* Botón de Registrar para Desktop */}
          <a
            href="/register"
            className="bg-transparent px-4 py-2 rounded border border-white text-white hover:text-gray-200"
          >
            QuePonerAqui
          </a>
        </div>
      </motion.div>

      <motion.div
        className={`hidden lg:flex fixed left-0 w-full h-12 items-center justify-center z-40 ${
          isScrolled ? "bg-pink-300 text-white" : "bg-transparent text-black"
        }`}
        initial={{ top: "4rem" }}
        animate={{ top: isScrolled ? "0" : "4rem" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="container mx-auto flex items-center justify-center">
          {/* Enlaces de navegación para Desktop */}
          {items.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
              className={`mx-4 transition-colors duration-300 ${
                isScrolled
                  ? "text-white hover:text-gray-400"
                  : "text-white hover:text-gray-400"
              } ${
                hoveredItem && hoveredItem !== item.name ? "text-gray-400" : ""
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Menú Hamburguesa para Móviles */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full bg-pink-300 text-white h-16 flex items-center justify-between px-4 z-50 ${
          isScrolled ? "bg-pink-300 text-white" : "bg-pink-300 text-white"
        }`}
      >
        {/* Logo o Texto */}
        <div className="text-xl font-bold">ESMERA SCHOOL</div>

        {/* Botón de Menú */}
        <Button
          icon={isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
          onClick={toggleMenu}
          className="text-white bg-transparent border-none hover:bg-gray-700"
          style={{ fontSize: "24px" }} // Aumentar el tamaño del icono
        />
      </div>

      {/* Menú Lateral para Móviles */}
      {isMenuOpen && (
        <motion.div
          className="fixed top-0 left-0 w-64 h-full  text-white shadow-lg flex flex-col p-4 z-50"
          initial={{ x: -250, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -250, opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            backgroundColor: "rgba(135, 135, 135, 0.9)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }} // Fondo y borde
        >
          <div className="flex flex-col flex-grow">
            {/* Enlaces de navegación para Móviles */}
            {items.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="py-4 hover:bg-pink-700"
                onClick={closeMenu} // Cerrar el menú al hacer clic en un item
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
