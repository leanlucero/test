import React,{useState} from 'react'
import imagenesBD from '../component/imagenes'
function Porfolio() {

const [img, setImg] = useState('all');
const [popup, setPopup] = useState(null);

const imagenes = imagenesBD
  return (
    <div>
      <>
  {/* ======= Portfolio Section ======= */}
  <section id="trabajos" className="portfolio">
    <div className="container">
      <div className="section-title">
        <span>Nuestros Trabajos</span>
        <h2>Nuestros Trabajos</h2>
        <p>
          Estos son algunos de nuestros trabajos terminados
        </p>
      </div>
      <div className="row" data-aos="fade-up" data-aos-delay="100">
        <div className="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters">
          <li onClick={()=>setImg('all')}>Todos</li>
            <li onClick={()=>setImg('abertura')}>Aberturas</li>
            <li onClick={()=>setImg('techo')}>Techos</li>
            <li onClick={()=>setImg('mampara')}>Mamparas</li>
            <li onClick={()=>setImg('terraza')}>Terrazas</li>
          </ul>
        </div>
      </div>
      <div
        className="row portfolio-container"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        {imagenes.map((i) => (
        i.categoria === img || img === 'all'?
        <div className="col-lg-4 col-md-6 portfolio-item " onClick={()=>setPopup(i)}>
          <img
            src={i.url}
            className="img-fluid"
            alt=""
          />
        </div> : <></>
      
        ))}
      </div>
    </div>
    <div className='pop-up' style={{display: popup ? 'block' : 'none'}}>
          <span onClick={()=> setPopup(null)}>&times;</span>
          {
            popup ? <img src={popup.url} className="imagen" alt="" /> 
            :<></>
          }
    </div>
  </section>
  {/* End Portfolio Section */}
</>

    </div>
  )
}

export default Porfolio

