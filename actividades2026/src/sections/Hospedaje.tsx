import { FaMapLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

export const Hospedaje = () => {
  return (
    <section
      id="hospedaje"
      className="relative py-20 px-6 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/registro-bg.jfif')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/97 via-blue-900/60 to-blue-950/90 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-neutral">
        {/* Título */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl md:text-4xl font-normal uppercase tracking-wide text-white my-12">
            Información de Hospedaje
          </h2>

          {/* MOBILE justify / DESKTOP center */}
          <p className="text-lg opacity-90 max-w-2xl mx-auto text-justify md:text-center">
            Para los hermanos que deseen traer tiendas de campaña, se ha
            dispuesto un espacio específico para hospedaje.
          </p>
        </div>

        {/* Cards (mantidos como estavam) */}
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {/* Dirección */}
          <div className="card bg-base-200 shadow-xl text-base-content">
            <div className="card-body">
              <div className="flex items-center">
                <FaMapLocationDot className="mr-2 text-3xl text-secondary" />
                <h3 className="card-title text-2xl mb-4">Ubicación</h3>
              </div>

              <p className="leading-relaxed text-justify md:text-left">
                <strong className="text-accent">
                  Desvío Cantón Ichanquezo
                </strong>
                <br />
                Km 40, carretera a Suchitoto
                <br />A 46 km del lugar de las actividades
              </p>

              <div className="divider"></div>

              <p className="opacity-80 text-justify md:text-left">
                Recomendamos coordinar con anticipación para una mejor
                organización.
              </p>
            </div>
          </div>

          {/* Contacto */}
          <div className="card bg-base-200 shadow-xl text-base-content">
            <div className="card-body">
              <div className="flex items-center">
                <IoLogoWhatsapp className="mr-2 text-4xl text-secondary" />
                <h3 className="card-title text-2xl mb-4">
                  Contacto para Hospedaje
                </h3>
              </div>

              <p className="mb-4 text-justify md:text-left">
                Para más información sobre el hospedaje, comunicarse con:
              </p>

              <div className="space-y-3">
                <div className="flex justify-between items-center bg-base-100 p-4 rounded-xl">
                  <span className="font-semibold">Adalberto Guardado</span>
                  <a
                    target="_blank"
                    href="https://wa.me/50375468061?text=Hola%20Adalberto,%20Dios%20te%20bendiga%20grandemente!%20Tengo%20una%20duda%20en%20relaci%C3%B3n%20al%20hospedaje%20en%20el%20camping,%20%C2%BFpodr%C3%ADas%20ayudarme?"
                    className="btn btn-sm btn-accent rounded-full"
                  >
                    Contactar
                  </a>
                </div>

                <p className="text-sm opacity-70">+503 7546 8061</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
