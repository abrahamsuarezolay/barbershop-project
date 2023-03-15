import React from "react";

const Servicios = () => {
    return(<div className="servicios-container row" id="servicios">
        <h1 className="col-12 text-center">Servicios</h1>
        <div className="row justify-content-center">
        <ul className="servicios-list d-flex flex-column col-2">
            <li>Corte</li>
            <li>Afeitado</li>
            <li>Arreglo</li>
            <li>Afeitado toalla caliente</li>
            <li>Rapado</li>
        </ul>
        <ul className="servicios-precio d-flex flex-column align-items-end col-2">
            <li>12€</li>
            <li>12€</li>
            <li>15€</li>
            <li>20€</li>
            <li>14€</li>
        </ul>
        </div>
    </div>)
}

export default Servicios