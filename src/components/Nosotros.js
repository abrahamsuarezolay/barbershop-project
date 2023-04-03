import React from "react";

const Nosotros = () =>{
    return(<div className="nosotros-container row h-100" id="nosotros">
        <div className="nosotros-text-container col-6">
            <h1 className="ms-3">Nosotros</h1>
            <p className="ms-3">nt esse ex culpa deserunt cillum quis. Esse labore do eiusmod sit ad irure quis sunt officia irure.</p>
        </div>
        <div className="col-6">
            <img src={require('../images/barber.jpg')} className="img-fluid" alt="mainpic"/>
        </div>
    </div>)
}

export default Nosotros;