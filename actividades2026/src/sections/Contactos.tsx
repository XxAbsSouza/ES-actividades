import React from "react";

const encargados = [
  {
    nombre: "Zaida Guzmán",
    telefono: "+50376924102",
    visible: "+503 7692 4102",
  },
  {
    nombre: "Samuel Escobar",
    telefono: "+50369969396",
    visible: "+503 6996 9396",
  },
  {
    nombre: "Roxana Merino",
    telefono: "+50375736523",
    visible: "+503 7573 6523",
  },
  {
    nombre: "Belén Romero",
    telefono: "+50377520456",
    visible: "+503 7752 0456",
  },
];

export const Contactos = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Encargados del Evento
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Para cualquier consulta adicional, pueden comunicarse con los
            siguientes hermanos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {encargados.map((persona, index) => {
            const mensaje = `Hola hermano(a) ${persona.nombre}, Dios te bendiga! Te escribo porque tengo una duda acerca del evento.`;
            const mensajeCodificado = encodeURIComponent(mensaje);

            // Alterna automaticamente
            const buttonColor = index % 2 === 0 ? "btn-primary" : "btn-accent";

            return (
              <div
                key={index}
                className={`card bg-base-100 shadow-lg hover:shadow-xl transition duration-300`}
              >
                <div className="card-body items-center text-center">
                  <h3 className="card-title text-lg">{persona.nombre}</h3>
                  <p className="opacity-70">{persona.visible}</p>

                  <div className="card-actions mt-4">
                    <a
                      href={`https://wa.me/${persona.telefono}?text=${mensajeCodificado}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn ${buttonColor} btn-sm rounded-full shadow-md hover:scale-105 transition`}
                    >
                      Enviar mensaje
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 opacity-80">
          Estamos a su disposición para cualquier consulta. ¡Será una bendición
          compartir juntos este tiempo!
        </div>
      </div>
    </section>
  );
};
