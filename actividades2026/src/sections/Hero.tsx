import React from "react";
import "./Hero.css";

export const Hero = () => {
  return (
    <div className="hero min-h-[85vh] relative flex">
      <img
        src="/HeroBg.png"
        alt="Hero"
        className="hero-img absolute top-0 right-0 h-full object-contain z-0"
      />

      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 z-10 relative max-w-[60vw]">
        <h1 className="text-4xl md:text-6xl font-semibold uppercase tracking-wide text-primary">
          Estudio Bíblico
        </h1>
        <h2 className="text-primary text-3xl md:text-3xl">
          con el{" "}
          <span className="text-secondary italic">Dr. José Benjamín Pérez</span>
        </h2>
        <div className="flex flex-col items-start justify-center max-w-[80%]">
          <div className="mt-10 p-4 md:p-6w-full ">
            <p className="text-lg md:text-xl text-primary">
              <span className="text-accent font-semibold italic">
                24, 25 y 26
              </span>{" "}
              de abril de 2026
            </p>
            <p className="text-lg md:text-xl text-primary mt-1">
              Palacio de los Deportes, San Salvador
            </p>
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdlUuyl0vubZRmsA48PJNAXUAxbfkoXUwUjUEeLOCt4zXEiTw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary mt-1 px-8 py-4 text-lg font-normal shadow-lg hover:shadow-xl transition-all duration-300 w-full"
          >
            Regístrate
          </a>
        </div>
      </div>
    </div>
  );
};
