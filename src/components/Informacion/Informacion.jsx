import React from "react";
import doc from "../../assets/doctor.jpg"; // Asegúrate de que la ruta sea correcta
import dra from "../../assets/doc.png"; // Asegúrate de que la ruta sea correcta
import "./informacion.css"; // Archivo CSS para estilos adicionales
import { Container, Row, Col } from 'react-bootstrap'; // Importa componentes de Bootstrap
import { FaUserMd, FaStethoscope } from 'react-icons/fa'; // Importa los iconos
import AOS from 'aos'; // Importa AOS

// Inicializa AOS (puede estar en un archivo principal como index.js o App.js)
// AOS.init();

export default function Informacion() {
  return (
    <Container className="info-container mt-4">
      <Row>
        <Col md={6} className="text-section">
          <h1 className="text" data-aos="fade-up">Estamos para servirte</h1>
          <p data-aos="fade-up" data-aos-delay="100">
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
          </p>
          <h4 data-aos="fade-up" data-aos-delay="200">
            <FaUserMd /> Consulta por Medicina del Dolor
          </h4>
          <h4 data-aos="fade-up" data-aos-delay="300">
            <FaStethoscope /> Consulta por Medicina Especializada
          </h4>
        </Col>

        <Col md={6} className="images-section d-flex flex-column align-items-end">
          <div className="info-item mb-3" data-aos="fade-left">
            <img src={doc} alt="Medical Icon" className="icon img-fluid" />
          </div>
          <div className="info-item" data-aos="fade-right">
            <img src={dra} alt="House Icon" className="icon2 img-fluid" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
