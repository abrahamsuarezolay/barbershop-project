import react from "react"
import { useState } from "react"


const Navbar = () => {

    const [color, setColor] = useState(false);

    const changeColor = () =>{
        if(window.scrollY >= 90){
            setColor(true);
        } else{
            setColor(false);
        }
    }

    window.addEventListener('scroll', changeColor)

    //{color ? "navbar navbar-bg" : "navbar"}

    return(
        
            <div className= "navbar fixed-top">
                <ul className="navbar-list">
                    <li><a href="#inicio" className="rootMargin: 20px">INICIO</a></li>
                    <li><a href="#nosotros" className="rootMargin: 20px">NOSOTROS</a></li>
                    <li><a href="#servicios" className="rootMargin: 20px">SERVICIOS</a></li>
                    <li><a href="#galeria" className="rootMargin: 20px">GALERÍA</a></li>
                    <li><a href="#contacto" className="rootMargin: 20px">CONTACTO</a></li>
                </ul>
            </div>
        )
}

export default Navbar