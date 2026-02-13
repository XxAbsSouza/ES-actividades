import React from "react";
import "./Hero.css";

export const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex flex-col md:flex-row items-center overflow-hidden"
    >
      {/* TEXTO */}
      <div className="relative z-20 flex flex-col items-center md:items-start text-center md:text-left px-6 md:px-16 lg:px-24 pt-32 md:pt-0 w-full md:w-1/2">
        <h1 className="text-4xl md:text-6xl font-semibold uppercase tracking-wide text-primary">
          Estudio Bíblico
        </h1>

        <h2 className="text-2xl md:text-3xl text-primary mt-2">
          con el{" "}
          <span className="text-secondary italic">Dr. José Benjamín Pérez</span>
        </h2>

        <div className="mt-8 space-y-2">
          <p className="text-lg md:text-xl text-primary">
            <span className="text-accent font-semibold italic">
              24, 25 y 26
            </span>{" "}
            de abril de 2026
          </p>

          <p className="text-lg md:text-xl text-primary">
            Palacio de los Deportes, San Salvador
          </p>
        </div>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdlUuyl0vubZRmsA48PJNAXUAxbfkoXUwUjUEeLOCt4zXEiTw/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary mt-8 px-10 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Regístrate
        </a>
      </div>

      {/* IMAGEM DESKTOP */}
      <img
        src="/HeroBg.png"
        alt="Evento"
        className="hidden md:block hero-img-desktop absolute top-0 right-0 h-full object-contain z-10"
      />
      {/* IMAGEM MOBILE */}
      <img
        src="/HeroBg.png"
        alt="Evento"
        className="md:hidden absolute hero-img-mobile bottom-0 left-0 w-full object-contain z-0"
      />
    </section>
  );
};
