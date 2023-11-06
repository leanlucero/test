import React, { useState } from 'react'

function Navbar() {
  const [menu, setMenu] = useState(false)

const listOptions = [
  { text: "Inicio", route: "#hero" },
  { text: "Servicios", route: "#services" },
  { text: "Trabajos", route: "#trabajos" },
  { text: "Contacto", route: "#topbar" }
];
/// -----------hace dinamico el active del menu cuando clickeas---------------------
  const [activeLink, setActiveLink] = useState(0);

  const renderList = () => {
    return listOptions.map((option, index) => {
      return (
        <li
          key={index}
          onClick={() => setActiveLink(index)}
          id={1}
        >
          <a href={option.route} className={`nav-link scrollto ${
            activeLink === index ? "active" : ""
          }`}>{option.text}
          </a>
        </li>
      );
    });
  };
///---------------------
  return (
  <div id="fijar">
  <header id="header" className="d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">
      <div className="logo">
      <img src={process.env.PUBLIC_URL + '/assets/img/icoitaliasinletras2.png'} alt="logo aluminio italia" />
        <a href="index.html">Aluminio Italia</a>
      </div>
      <nav id="navbar" className="navbar">
        <ul>
        {renderList()}
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
