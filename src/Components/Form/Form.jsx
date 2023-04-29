import React, { useState } from 'react';
import "./Form.module.css"

function Form() {

    const [identificacion, setIdentificacion] = useState();
    const [nombreCompleto, setNombreCompleto] = useState();
    const [valorPrestamo, setValorPrestamo] = useState();
    const [tipoPrestamo, setTipoPrestamo] = useState();
    const [numeroCuotas, setNumeroCuotas] = useState();
    const [interes, setInterestPrestamo] = useState(0);
    
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case "identificacion":
                setIdentificacion(value);
                break;
            case "nombreCompleto":
                setNombreCompleto(value);
                break;
            case "valorPrestamo":
                setValorPrestamo(value);
                break;
            case "tipoPrestamo":
                setTipoPrestamo(value);
                break;
            case "numeroCuotas":
                setNumeroCuotas(value);
                break;
            default:
                break;
        }
        console.log(event.target.value)
    };

  const handleSubmit = (event) => {
  event.preventDefault();
  
  if (
    identificacion !== null &&
    nombreCompleto !== null &&
    valorPrestamo !== null &&
    tipoPrestamo !== null &&
    numeroCuotas !== null
  ) {
    // Validar el valor de interés
    if (valorPrestamo && tipoPrestamo) {
      switch (tipoPrestamo) {
        case "Vehiculo":
          setInterestPrestamo( valorPrestamo * 0.05); // 5% de interés
          break;
        case "Vivienda":
          setInterestPrestamo(valorPrestamo * 0.08); // 8% de interés
          break;
        case "Educacion":
          setInterestPrestamo(valorPrestamo * 0.1) ; // 10% de interés
          break;
        default:
          interes = null;
      }
    }
    if (interes !== null && !isNaN(interes)) {
      const data = {
        identificacion,
        nombreCompleto,
        valorPrestamo,
        tipoPrestamo,
        numeroCuotas,
        interes
      };
      
      console.log(data);
    } else {
      console.log("El valor de interés es inválido. Por favor, selecciona un tipo de préstamo válido.");
    }
  } else {
    console.log("Por favor, completa todos los campos.");
  }
};

      

    return (
        <>
            <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <label htmlFor="identificacion">Identificación</label>
                        <input
                            className="form-control"
                            type="text"
                            name="identificacion"
                            id="identificacion"
                            placeholder="Ingresa tu identificación"
                            value={identificacion}
                            onChange={handleChange}
                        />
                        <label htmlFor="nombreCompleto">Nombre completo</label>
                        <input
                            className="form-control"
                            type="text"
                            name="nombreCompleto"
                            id="nombreCompleto"
                            placeholder="Ingresa tu nombre completo"
                            value={nombreCompleto}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="valorPrestamo">Valor del préstamo</label>
                        <input
                            className="form-control"
                            type="text"
                            name="valorPrestamo"
                            id="valorPrestamo"
                            placeholder="Ingresa el valor del préstamo"
                            value={valorPrestamo}
                            onChange={handleChange}
                        />
                        <label htmlFor="tipoPrestamo">Tipo de préstamo</label>
                        <select
                            className="form-select"
                            name="tipoPrestamo"
                            id="tipoPrestamo"
                            value={tipoPrestamo}
                            onChange={handleChange}
                        >
                            <option value="">Seleccione un tipo de préstamo</option>
                            <option value="Vehiculo">Vehículo</option>
                            <option value="Vivienda">Vivienda</option>
                            <option value="Educacion">Educación</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="numeroCuotas">Número de cuotas</label>
                        <select
                            className="form-select"
                            name="numeroCuotas"
                            id="numeroCuotas"
                            value={numeroCuotas}
                            onChange={handleChange}
                        >
                            <option value="">Seleccione el número de cuotas</option>
                            <option value="12">12</option>
                            <option value="24">24</option>
                            <option value="36">36</option>
                        </select>
                        <label htmlFor="valorDeuda">Valor de la deuda</label>
                        <input
                            className="form-control"
                            type="text"
                            name="valorDeuda"
                            id="valorDeuda"
                            placeholder="Valor de la deuda"
                            value={valorPrestamo * interes / numeroCuotas}
                            disabled
                        />
                    </div>
                    <div className="col-md-6">
                        <button className="btn btn-primary" type="submit">
                            Guardar
                        </button>
                    </div>
                </div>
                </form>
            </div>
        </>
    );
}

export default Form;
