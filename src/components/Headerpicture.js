import React from "react";

const Headerpicture = () =>{
    return(
    <div className="headerpicture row" id="inicio">
        <div className="col-2"></div>
        <div className="col-8">
            <img src={require('../images/logo1.jpeg')} className="img-fluid" />
        </div>
        <div className="col-2"></div>
    </div>)
}

export default Headerpicture;