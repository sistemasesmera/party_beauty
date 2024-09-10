import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-700 py-8 border-t border-gray-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <motion.div
            className="text-center md:text-left mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl font-bold">Esmera</h1>
          </motion.div>

          {/* Links to Privacy Policy and Terms */}
          <motion.nav
            className="mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <ul className="flex flex-wrap justify-center md:justify-start space-x-6">
              <li>
                <a
                  href="/docs/politicas-de-privacidad.pdf"
                  target="_blank"
                  className="hover:text-gray-900 transition-colors duration-300"
                >
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a
                  href="/docs/terminos-y-condiciones.pdf"
                  target="_blank"
                  className="hover:text-gray-900 transition-colors duration-300"
                >
                  Términos y Condiciones
                </a>
              </li>
            </ul>
          </motion.nav>
        </div>

        {/* Copyright */}
        <motion.div
          className="text-center mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p>
            &copy; {new Date().getFullYear()} Esmera. Todos los derechos
            reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
