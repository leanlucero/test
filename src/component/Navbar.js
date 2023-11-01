import React from 'react'

function Navbar() {
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
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>
      {/* .navbar */}
    </div>
  </header>    </div>
  )
}

export default Navbar
