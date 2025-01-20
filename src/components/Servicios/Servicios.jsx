import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Collapse, Button } from 'react-bootstrap';
import './servicios.css'; // Asegúrate de importar tu archivo CSS

export default function Servicios() {


  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Algunos de nuestros servicios</h2>
      <p className="text-center mb-4">Recuerda que siempre eres nuestra prioridad!</p>
      <div className="row row-cols-1 row-cols-md-3 g-3">
        <div className="col">
          <div className="card servicios-card consulta-medica">
            <div className="card-body">
              <h5 className="card-title">01. Medicina Especializada</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card servicios-card fisioterapia">
            <div className="card-body">
              <h5 className="card-title">02. Fisioterapia y Terapia Ocupacional</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card servicios-card medicina-dolor">
            <div className="card-body">
              <h5 className="card-title">03. Medicina del Dolor</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card servicios-card cirugia-cadera">
            <div className="card-body">
              <h5 className="card-title">04. Cirugía de Cadera</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card servicios-card transporte-asistencial">
            <div className="card-body">
              <h5 className="card-title">05. Servicio de Ambulancia </h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card servicios-card cuidado-casa">
            <div className="card-body">
              <h5 className="card-title">06. Cuidados en Casa</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card servicios-card ortopedia">
            <div className="card-body">
              <h5 className="card-title">07. Ortopedia</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card servicios-card camara-hiper">
            <div className="card-body">
              <h5 className="card-title">08. Camara Hiperbárica</h5>
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
  );
}
