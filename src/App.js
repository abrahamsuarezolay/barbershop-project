import Navbar from "./components/Navbar";
import Nosotros from "./components/Nosotros";
import Headerpicture from "./components/Headerpicture";
import Servicios from "./components/Servicios";
import Galeria from "./components/Galeria";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {


  const[fixed, setFixed]=useState(true);
    const changeFixed = () =>{
        if(fixed===true){
            setFixed(false);
            console.log(fixed);
        }else{
            setFixed(true);
            console.log(fixed);
        }
        
    }

  return (
    <div className="container-main">
      <header >
       <Navbar fixed={fixed}/>
       <Headerpicture />
      </header>
      <main>
        <Nosotros />
        <Servicios />
        <Galeria changeFixed={changeFixed}/>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
