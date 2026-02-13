import React from "react";
import "./Fade.css";

export const Registro = () => {
  return (
    <section
      className="relative py-12 flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/registro-bg.jfif')", // coloque sua imagem aqui
      }}
    >
      {/* Overlay azul escuro com blur */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/97 via-blue-900/60 to-blue-950/90 backdrop-blur-sm"></div>

      {/* Conteúdo */}
      <div className="relative z-10 w-full md:max-w-4xl px-6 text-center text-neutral flex flex-col justify-center items-center">
        <h2 className="text-3xl md:text-4xl font-normal uppercase mb-12 text-white">
          Registro del Evento
        </h2>

        <p className="text-lg md:text-xl leading-relaxed mb-6 mt-12 opacity-90">
          Para ayudarnos con la organización y logística del evento, pedimos{" "}
          <span className="font-bold">a todos los hermanos</span> que completen
          el formulario de registro.
        </p>

        <div className="bg-warning/10 border border-warning/30 text-warning rounded-xl p-5 text-base md:text-lg">
          ⚠️ <span className="font-semibold">Importante: </span>
          La entrada al evento <span className="font-bold">NO</span> será por
          registro. La información oficial de ingreso será compartida más
          adelante a través del canal de WhatsApp.
        </div>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdlUuyl0vubZRmsA48PJNAXUAxbfkoXUwUjUEeLOCt4zXEiTw/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-accent btn-lg  my-4 hover:scale-105 transition-transform duration-300"
        >
          Registrarme ahora
        </a>

        <p className="text-base md:text-lg mt-4">
          Agradecemos su apoyo registrándose para poder organizar todo de la
          mejor manera.
        </p>
      </div>
    </section>
  );
};
