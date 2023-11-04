import React, { useState } from 'react'

function Navbar() {
  const [menu, setMenu] = useState(false)

  return (
  <div id="fijar">
  <header id="header" className="d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">
      <h1 className="logo">
      <img src={process.env.PUBLIC_URL + '/assets/img/icoitaliasinletras2.png'} alt="logo aluminio italia" />
        <a href="index.html">Aluminio Italia</a>
      </h1>
      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero"> Inicio </a></li>
          <li>
            <a className="nav-link scrollto" href="#services">
              Servicios
            </a>
          </li>
          <li>
            <a className="nav-link scrollto " href="#portfolio">
              Trabajos
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#topbar">
              Contactos
            </a>
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" onClick={()=>setMenu(!menu)} />
       
      </nav>
      {/* .navbar */}
    </div>    
  
    { menu ?
        <div id="hiddenmenu" className='navbar-mobile'>
          <span className="mobile-nav-toggle"onClick={()=>setMenu(!menu)}>X</span>
          <ul>
            <li><a href="#hero" onClick={()=>setMenu(!menu)}>Inicio</a></li>
            <li><a href="#services" onClick={()=>setMenu(!menu)}>Servicios</a></li>
            <li><a href="#portfolio" onClick={()=>setMenu(!menu)}>Trabajos</a></li>
            <li><a href="#topbar" onClick={()=>setMenu(!menu)}>Contactos</a></li>
          </ul>
        </div> :<></> }
  </header>    
  </div>
  )
}

export default Navbar
