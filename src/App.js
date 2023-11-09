import './App.css';
import Footer from './component/Footer'
import Titulo from './component/Titulo'
import Navbar from './component/Navbar'
import Servicios from './component/Servicios'
import Porfolio from './component/Porfolio'
import Nosotros from './component/Nosotros'
import BotonWSP from './component/BotonWSP'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Titulo />
      <Servicios />
      <Nosotros />
      <BotonWSP />
      <Porfolio />
      <Footer/>
    </div>
  );
}

export default App;
