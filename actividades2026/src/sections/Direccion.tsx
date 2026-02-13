import React from "react";
import { CiClock1, CiClock2 } from "react-icons/ci";
import "./Fade.css";

export const Direccion = () => {
  const actividades = [
    { dia: "Viernes 24", horaSV: "4:00 pm", horaPR: "6:00 pm" },
    { dia: "Sábado 25", horaSV: "7:00 am", horaPR: "9:00 am" },
    { dia: "Domingo 26", horaSV: "7:00 am", horaPR: "9:00 am" },
  ];

  const direccion =
    "Avenida Juan Pablo II y, Diagonal universitaria, San Salvador, El Salvador";
  const googleMapsLink =
    "https://www.google.com/maps/dir/?api=1&destination=Avenida+Juan+Pablo+II+y,+Diagonal+universitaria,+San+Salvador,+El+Salvador";
  const wazeLink = "https://waze.com/ul?ll=13.70485,-89.19545&navigate=yes";

  return (
    <div className="flex flex-col items-center justify-center px-4 py-10">
      <div className="w-1/4 my-5 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>

      <h1 className="text-3xl md:text-4xl font-normal uppercase tracking-wide text-primary text-center my-12">
        Actividades
      </h1>

      <div className="text-left md:text-center">
        <p>
          Las Actividades serán ministradas en el Palacio de Los Deportes Carlos
          "El Famoso Hernández” INDES.
        </p>
        <p className="font-medium">
          <span className="text-accent">Dirección:</span> {direccion}
        </p>
      </div>

      {/* Container principal com space-between */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4 md:max-w-6xl mt-10">
        {/* Cards de actividades */}
        <div className="flex flex-col justify-between md:w-1/2">
          {actividades.map((act, i) => {
            const isRight = i % 2 === 0;

            return (
              <div
                key={act.dia}
                className={`relative bg-neutral/50 text-neutral-content p-4 flex flex-col my-2
        hover:scale-105 transition-transform duration-300
        ${
          isRight
            ? "rounded-r-lg gradient-left items-end text-right"
            : "rounded-l-lg gradient-right items-start text-left"
        }
      `}
              >
                <h2 className="font-semibold text-xl text-secondary mb-2">
                  {act.dia}
                </h2>

                <div
                  className={`flex items-center gap-2 text-sm ${
                    isRight ? "justify-end" : "justify-start"
                  }`}
                >
                  <CiClock1 className="text-accent" />
                  <span className="font-medium text-accent">Hora SV:</span>
                  <span>{act.horaSV}</span>
                </div>

                <div
                  className={`flex items-center gap-2 text-sm ${
                    isRight ? "justify-end" : "justify-start"
                  }`}
                >
                  <CiClock2 className="text-secondary" />
                  <span className="font-medium text-secondary">Hora PR:</span>
                  <span>{act.horaPR}</span>
                </div>

                <p className="text-xs text-neutral-content/70 italic mt-2">
                  Todo sujeto a cambios
                </p>
              </div>
            );
          })}
        </div>

        <div className="w-px h-40 my-5 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

        {/* Mapa */}
        <div className="flex flex-col gap-4 md:w-1/2 justify-between">
          <p className="text-secondary">Vea las rutas en tu app de preferencia:</p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-primary"
            >
              Google Maps
            </a>
            <a
              href={wazeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-accent"
            >
              Waze
            </a>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.224479668594!2d-89.1954459!3d13.704849800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6330933626c7b3%3A0xca7ff8a70c1cb9cc!2sAvenida+Juan+Pablo+II+y,+Diagonal+universitaria,+San+Salvador,+El+Salvador!5e0!3m2!1spt-BR!2sbr!4v1770913582956!5m2!1spt-BR!2sbr"
            width="100%"
            height="350"
            className="rounded-lg shadow-md"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
