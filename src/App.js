import Navbar from "./components/Navbar";
import Nosotros from "./components/Nosotros";
import Headerpicture from "./components/Headerpicture";
import Servicios from "./components/Servicios";
import Galeria from "./components/Galeria";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container-main">
      <header>
       <Navbar />
       <Headerpicture />
      </header>
      <main>
        <Nosotros />
        <Servicios />
        <Galeria />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
