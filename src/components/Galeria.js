import React from "react";
import { nanoid } from "nanoid";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import img1 from "../images/carousel/1.jpg";
import img2 from "../images/carousel/2.jpg";
import img3 from "../images/carousel/3.jpg";
import img4 from "../images/carousel/4.jpeg";
import img5 from "../images/carousel/5.jpg";
import img6 from "../images/carousel/6.jpeg";

const Galeria = ({changeFixed}) => {

    const images = [
        {
            id: nanoid(),
            img: img1,
        },
        {
            id: nanoid(),
            img: img2,
        },
        {
            id: nanoid(),
            img: img3,
        },
        {
            id: nanoid(),
            img: img4,
        },
        {
            id: nanoid(),
            img: img5,
        },
        {
            id: nanoid(),
            img: img6,
        },
    ]

    const [model, setModel] = useState(false);
    const [tempimg, setTempImg] = useState("");
    const getImg = (img) =>{
        setTempImg(img);
        setModel(true);
        changeFixed();
    }


    return(
    <>
    <div className={model? "model open" : "model"}>
        <img src={tempimg} alt="1"/>
            <IoCloseSharp onClick={()=> {setModel(false); changeFixed();}}/>
    </div>
    <div className="galeria-container" id="galeria">
        {images.map((item, index)=>{
            return(<div className="pics" key={index} onClick={()=>getImg(item.img)}>
                    <img src={item.img} alt="1" id="im" style={{width: "100%"}}/>
                </div>)

        })}
    </div>
    </>);
}
export default Galeria;