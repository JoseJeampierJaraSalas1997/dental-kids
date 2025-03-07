import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Máxima Protección para tu Salud Dental</h2>
          <p>Calidad, innovación y seguridad en cada producto para el cuidado de tu sonrisa.</p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p><strong>{d.text}</strong></p>
                </div>
              ))
            : "Cargando..."}
        </div>
      </div>
    </div>
  );
};
