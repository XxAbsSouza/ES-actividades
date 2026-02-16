import React from "react";

export const Direccion = () => {
  const actividades = [
    { dia: "Viernes 24" },
    { dia: "Sábado 25" },
    { dia: "Domingo 26" },
  ];

  const direccion =
    "Avenida Juan Pablo II y Diagonal Universitaria, San Salvador, El Salvador";

  const googleMapsLink =
    "https://www.google.com/maps/dir/?api=1&destination=Avenida+Juan+Pablo+II+y+Diagonal+Universitaria,+San+Salvador,+El+Salvador&hl=es";

  const wazeLink = "https://waze.com/ul?ll=13.70485,-89.19545&navigate=yes";

  const whatsappChannel =
    "https://whatsapp.com/channel/0029Vb4C0rZ96H4Tig0eXt03";

  return (
    <section id="evento" className="px-4 md:px-6 pt-20">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* TÍTULO */}
        <h2 className="text-3xl md:text-4xl font-normal uppercase tracking-wide text-primary mb-6">
          Actividades
        </h2>

        {/* DESCRIÇÃO */}
        <div className="max-w-2xl text-justify md:text-center space-y-3">
          <p>
            Todas las actividades serán realizadas en el Palacio de Los Deportes
            Carlos "El Famoso Hernández” INDES.
          </p>

          <p className="font-medium">
            <span className="text-accent">Dirección:</span> {direccion}
          </p>

          <p className="mt-4 text-accent">
            Los horarios serán informados únicamente a través del canal oficial
            de WhatsApp.
          </p>

          <a
            href={whatsappChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary mt-4"
          >
            Ver horarios en WhatsApp
          </a>
        </div>

        {/* GRID DE DÍAS */}
        <div className="grid gap-6 mt-14 w-full md:grid-cols-3">
          {actividades.map((act) => (
            <div
              key={act.dia}
              className="bg-neutral/40 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <h3 className="text-lg font-semibold text-secondary">
                {act.dia}
              </h3>
            </div>
          ))}
        </div>

        {/* MAPA */}
        <div className="w-full mt-20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.224479668594!2d-89.1954459!3d13.7048498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6330933626c7b3%3A0xca7ff8a70c1cb9cc!2sAvenida+Juan+Pablo+II+y+Diagonal+Universitaria,+San+Salvador,+El+Salvador!5e0!3m2!1ses!2ssv!4v1770913582956"
            width="100%"
            height="400"
            className="rounded-2xl shadow-lg"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>

          {/* BOTÕES */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <a
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Abrir en Google Maps
            </a>

            <a
              href={wazeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent"
            >
              Abrir en Waze
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
