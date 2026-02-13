import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";



export const Hospedaje = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-normal uppercase tracking-wide text-primary text-center my-12">
            Información de Hospedaje
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Para los hermanos que deseen traer tiendas de campaña, se ha
            dispuesto un espacio específico para hospedaje.
          </p>
        </div>

        {/* Conteúdo principal */}
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {/* Dirección */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <div className="flex items-center">
                <FaMapLocationDot className="mr-2 text-3xl text-secondary" />
                <h3 className="card-title text-2xl mb-4 ">Ubicación</h3>
              </div>

              <p className="leading-relaxed">
                <strong className="text-accent">
                  Desvío Cantón Ichanquezo
                </strong>
                <br />
                Km 40, carretera a Suchitoto
                <br />A 46 km del lugar de las actividades
              </p>

              <div className="divider"></div>

              <p className="opacity-80">
                Recomendamos coordinar con anticipación para una mejor
                organización.
              </p>
            </div>
          </div>

          {/* Contacto */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <div className="flex items-center">
                <IoLogoWhatsapp className="mr-2 text-4xl text-secondary" />
                <h3 className="card-title text-2xl mb-4">
                  Contacto para Hospedaje
                </h3>
              </div>

              <p className="mb-4">
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
