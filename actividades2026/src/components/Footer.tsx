import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-base-200/60 backdrop-blur-md border-t border-base-300 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10 items-center text-center md:text-left">
          {/* LOGO + NOMBRE */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src="/logo.png" alt="Logo" className="h-16 w-auto" />
            <p className="text-lg font-semibold tracking-wide">
              Iglesia La Voz de la Piedra Angular
            </p>
          </div>

          {/* FRASE INSPIRADORA */}
          <div className="text-sm opacity-80 leading-relaxed max-w-md mx-auto">
            Un tiempo preparado para compartir, crecer espiritualmente y
            fortalecer la comunión entre hermanos.
          </div>

          {/* COPYRIGHT PERSONALIZADO */}
          <div className="text-sm opacity-70">
            © {new Date().getFullYear()}
            <br />
            Evento organizado con amor y dedicación.
          </div>
        </div>

        {/* Línea inferior */}
        <div className="divider my-10"></div>

        <div className="text-center text-xs opacity-60 tracking-wide">
          “Mirad cuán bueno y cuán delicioso es habitar los hermanos juntos en
          armonía.”
        </div>
      </div>
    </footer>
  );
};
