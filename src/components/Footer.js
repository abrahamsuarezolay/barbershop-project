import { IoLocation } from "react-icons/io5";
import { IoIosPhonePortrait, IoMdMail, IoLogoInstagram } from "react-icons/io";



const Footer = () => {

    return (<div className="footer-container row" id="contacto">
        <div className="contacta col-4">
            <div className="ms-3">
                <h6>Contacta con nosotros</h6>
                <hr></hr>
                <div>
                    <p>
                        <IoLocation size={18} /> Avenida Conde Santa Bárbara, nº1
                        <br></br>Lugones, Asturias
                    </p>
                </div>
                <div>
                    <p>
                        <IoIosPhonePortrait size={18} /> 984 19 02 56
                    </p>
                </div>
                <div>
                    <p>
                        <IoMdMail size={18} /> morelbarbershop@gmail.com
                    </p>
                </div>
            </div>
        </div>
        <div className="col-1"></div>
        <div className="footer-logo col-2 text-center">
            <img src={require('../images/logo1.jpeg')} className="img-fluid" alt="logo" />
            <p>
                <a href="https://www.instagram.com/morel_barbershop/" target="_blank" rel="noreferrer"><IoLogoInstagram size={35} /></a>
            </p>
        </div>
        <div className="col-1"></div>
        <div className="horarios col-4">
            <div className="me-3">
                <h6>Horarios de apertura</h6>
                <hr></hr>
                <ul>
                    <li>Lunes a Viernes - 10:00-14:00 / 16:00-20:00</li>
                    <li>Sábado - 10:00-14:00</li>
                    <li>Domingo - Cerrado</li>
                </ul>
            </div>
        </div>
    </div>)

}

export default Footer;