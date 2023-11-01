import './App.css';
import Footer from './component/Footer'
import Titulo from './component/Titulo'
import Navbar from './component/Navbar'
import Servicios from './component/Servicios'
import Porfolio from './component/Porfolio'
import Nosotros from './component/Nosotros'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Titulo />
      <Servicios />
      <Nosotros />
      <Porfolio />
      <Footer/>
    </div>
  );
}

export default App;
