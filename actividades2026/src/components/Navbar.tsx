import React, { useEffect, useState } from "react";

export const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Mostrar ao subir, esconder ao descer
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 80) {
        setShow(false); // descendo
      } else {
        setShow(true); // subindo
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const links = ["Inicio", "Evento", "Registro", "Hospedaje", "Contacto"];

  return (
    <>
      {/* NAVBAR */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="bg-base-100/80 backdrop-blur-xl shadow-sm">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between md:justify-evenly">
            {/* LOGO (ligeiramente à direita) */}
            <div className="absolute left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:relative lg:ml-20">
              <a href="#inicio">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="h-12 w-auto hover:scale-105 transition"
                />
              </a>
            </div>

            {/* LINKS DESKTOP */}
            <ul className="hidden lg:flex gap-12 text-sm font-medium tracking-wide">
              {links.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="relative group py-2"
                  >
                    <span className="opacity-80 group-hover:opacity-100 transition">
                      {item}
                    </span>
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden absolute right-8 btn btn-ghost btn-circle"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* SIDEBAR MOBILE */}
      <div
        className={`fixed inset-0 z-50 transition ${
          sidebarOpen ? "visible" : "invisible"
        }`}
      >
        {/* Overlay */}
        <div
          onClick={() => setSidebarOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            sidebarOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Sidebar */}
        {/* Sidebar */}
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-base-100 shadow-2xl transform transition-transform duration-500 ${
            sidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header da Sidebar */}
          <div className="flex justify-end p-6">
            <button
              onClick={() => setSidebarOpen(false)}
              className="btn btn-ghost btn-circle text-xl"
            >
              ✕
            </button>
          </div>

          {/* Links */}
          <div className="px-8 space-y-6 text-lg font-medium">
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setSidebarOpen(false)}
                className="block hover:text-primary transition"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
