import { useState } from 'react'
import './App.css'

import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { Direccion } from "./sections/Direccion";
import { Registro } from "./sections/Registro";
import { Hospedaje } from "./sections/Hospedaje";
import { Contactos } from "./sections/Contactos";
import { Footer } from "./components/Footer";


function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Direccion />
      <Registro />
      <Hospedaje />
      <Contactos />
      <Footer />
    </>
  );
}

export default App
