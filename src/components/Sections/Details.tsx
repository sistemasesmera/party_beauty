import React, { useEffect, useState } from "react";
import {
  FaClock,
  FaTag,
  FaCalendarAlt,
  FaUsers,
  FaPizzaSlice,
  FaArrowRight,
} from "react-icons/fa";

// Componente de Loader
const Loader: React.FC = () => (
  <div className="flex justify-center items-center">
    <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-12 w-12 mb-4"></div>
  </div>
);

const Details: React.FC = () => {
  // Estado para las fechas, para el estado de carga, y para manejar errores
  const [dates, setDates] = useState<{ date: string; available: boolean }[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false); // Nuevo estado para manejar errores

  // useEffect para cargar las fechas del backend
  useEffect(() => {
    // Función que obtiene las fechas del backend
    const fetchDates = async () => {
      try {
        const response = await fetch("http://localhost:3000/bookings/dates");

        // Verificar si la respuesta es correcta (status 200)
        if (!response.ok) {
          throw new Error("Error al obtener las fechas");
        }

        const data = await response.json();

        // Verificar que los datos sean un arreglo antes de actualizar el estado
        if (Array.isArray(data)) {
          setDates(data);
        } else {
          throw new Error("Formato de datos incorrecto");
        }
      } catch (error) {
        console.error("Error al cargar las fechas", error);
        setError(true); // Si ocurre un error, se activa el estado de error
      } finally {
        setLoading(false); // Desactivar el loader al finalizar
      }
    };

    // Llamar a la función fetchDates al cargar el componente
    fetchDates();
  }, []);

  return (
    <section
      id="details"
      className="relative px-4 py-8 md:py-8  text-[#451a52] flex flex-col items-center"
    >
      <div className="container mx-auto flex flex-col space-y-8 items-center md:justify-center ">
        {/* Tarjetas de detalles */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start  ">
          <h2 className="block md:hidden text-4xl md:text-4xl font-bold mb-6 text-center">
            Detalles del Evento
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
              <FaClock className="text-pink-500 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold">Duración</h3>
                <p className="text-base">4 horas (15:00h - 19:00h)</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
              <FaTag className="text-pink-500 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold">Precio</h3>
                <p className="text-base">25 €/persona</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
              <FaUsers className="text-pink-500 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold">Capacidad</h3>
                <p className="text-base">Mínimo 4 - Máximo 10 personas</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
              <FaPizzaSlice className="text-pink-500 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold">Incluye</h3>
                <p className="text-base">
                  Catering, material de maquillaje, decoración personalizada
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Fechas Disponibles */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
          {/* Botón de Reserva */}
          <div className="mb-6">
            <a
              href="#"
              className="bg-pink-500 text-white px-6 py-3 md:px-24 md:py-4 rounded-xl font-bold flex text-base md:text-xl items-center space-x-2 hover:bg-pink-600 transition"
            >
              <span className="hidden md:inline">RESERVA AHORA</span>
              <span className="md:hidden">Reserva</span>
              <FaArrowRight className="text-lg md:text-2xl" />
            </a>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Fechas Disponibles
          </h2>

          {/* Mostrar Loader mientras se cargan las fechas */}
          {loading ? (
            <Loader />
          ) : error ? (
            // Si ocurre un error, mostrar este mensaje
            <p className="text-red-600 text-lg font-semibold">
              Ha ocurrido un error con la carga de las fechas disponibles.
            </p>
          ) : (
            // Si no hay error y no se está cargando, mostrar las fechas
            <ul className="list-disc list-inside space-y-2 text-center md:text-left">
              {dates?.map((item, index) => (
                <li
                  key={index}
                  className={`text-lg flex items-center justify-center md:justify-start space-x-2 ${
                    item.available ? "text-green-600" : "text-red-600"
                  }`}
                >
                  <FaCalendarAlt
                    className={`text-2xl ${
                      item.available ? "text-green-600" : "text-red-600"
                    }`}
                  />
                  <span
                    className={`font-semibold ${
                      item.available ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {item.date} - {item.available ? "Disponible" : "Ocupada"}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default Details;
