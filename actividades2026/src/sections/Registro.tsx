export const Registro = () => {
  const whatsappChannel =
    "https://whatsapp.com/channel/0029Vb4C0rZ96H4Tig0eXt03";
  return (
    <section id="registro" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-justify md:text-center mb-14 items-center flex flex-col">
          <div className="w-2/4 md:w-1/4 mb-12 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
          <h2 className="text-3xl md:text-4xl uppercase tracking-wide text-primary mb-6 text-center">
            Registro del Evento
          </h2>

          <p className="text-lg md:text-xl opacity-80">
            Para ayudarnos con la organización y logística del evento, pedimos a
            todos los hermanos que completen el formulario de registro.
          </p>
        </div>

        <div className="bg-base-200 border border-base-300 rounded-2xl p-8 md:p-10 shadow-lg">
          <div className="bg-warning/10 border border-warning/30 text-primary rounded-xl p-6 mb-8">
            ⚠️ <span className="font-semibold">Importante: </span>
            La entrada al evento <span className="font-bold">NO</span> será por
            registro. La información oficial de ingreso será compartida más
            adelante a través del canal de WhatsApp.
            <p className="mt-4 text-accent">
              Los horarios serán informados únicamente a través del canal
              oficial de WhatsApp.
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

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="text-base md:text-lg opacity-80 text-justify">
              Agradecemos su apoyo registrándose para poder organizar todo de la
              mejor manera.
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdlUuyl0vubZRmsA48PJNAXUAxbfkoXUwUjUEeLOCt4zXEiTw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent btn-lg hover:scale-105 transition-transform duration-300 py-7 md:py-0"
            >
              Registrarme ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
