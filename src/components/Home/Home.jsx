import React from "react";
import Navbar from "../Navbar/Navbar";
import "./home.css";
import Nosotros from "../Nosotros/Nosotros";
import Footer from "../Footer/Footer";
import Redes from "../Redes/Redes";
import Banner from "../Admin/Banner/Banner";
import Servicios from "../Servicios/Servicios";
import Informacion from "../Informacion/Informacion";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="home">
          <h2 className="title-1">
            ESPECIALIZADOS EN
          </h2>
          .<h2 className="title-2">EN TU SALUD</h2> 
          {/* <br />
          <h4>Eres la prioridad para nosotros</h4> */}
        </div>
      </div>
      <div className="banner">
        <Banner />
      </div>
      <div className="information">
        <Informacion />
      </div>

      <div className="nosotros">
        <Nosotros />
      </div>
      <div className="services">
        <Servicios />
      </div>
      <div className="footer">
        {/* <Footer /> */}
        <Redes />
      </div>
    </div>
  );
}
