import React from 'react'

function MicroServicio({titulo, texto, delay, margin, icono}) {
  const clase ="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"+ margin
 return( 
 <div
          className= {clase} 
          data-aos="fade-up"
          data-aos-delay={delay}
        >
          <div className="icon-box">
            <div className="icon">
              <i className={icono} />
            </div>
            <h4>
              <a href="">{titulo}</a>
            </h4>
            <p>
              {texto}
            </p>
          </div>
        </div>
 )
}
function Servicios() {
  return (
    <div>
      <>
  <section id="services" className="services">
    <div className="container">
      <div className="section-title">
        <span>Por qué elegir aluminio??</span>
        <h2>Por qué elegir aluminio??</h2>
        <p>
          Ventajas que tiene el aluminio con respecto a otro materiales
        </p>
      </div>
      <div className="row">
        <MicroServicio icono="bi bi-speedometer2" titulo="Ligereza" texto="El aluminio es un material liviano, lo que facilita la instalación de ventanas y puertas de aluminio sin crear una carga estructural significativa en el edificio." delay="0" margin=" mt-lg-0" />
        <MicroServicio icono="bx bx-brush" titulo="Resistencia a la corrosión" texto="La resistencia del aluminio a la corrosión es esencial en exteriores, ya que las ventanas y puertas estarán expuestas a la intemperie. El aluminio forma naturalmente una capa de óxido que lo protege de la corrosión." delay="150" margin=" mt-lg-0"/>
        <MicroServicio icono="bi bi-alarm" titulo="Durabilidad" texto=" Las ventanas y puertas de aluminio son resistentes y duraderas, lo que garantiza una larga vida útil con poco mantenimiento. No se deforman ni se oxidan con el tiempo." delay="300" margin=" mt-lg-0"/>
        <MicroServicio icono="bx bx-palette" titulo="Estética" texto="El aluminio ofrece un aspecto moderno y limpio que se adapta a una variedad de estilos arquitectónicos. Además, permite diseños delgados y elegantes que maximizan la entrada de luz." delay="450" margin=""/>
        <MicroServicio icono="bx bx-wrench" titulo="Facilidad de mantenimiento:" texto=" Las superficies de aluminio son fáciles de limpiar y mantener, lo que es importante en aplicaciones de construcción donde se requiere un aspecto limpio y ordenado." delay="600" margin=""/>
        <MicroServicio icono="bx bx-dumbbell" titulo="Resistencia a la deformación" texto=" El aluminio conserva su forma y resistencia incluso en condiciones climáticas extremas, lo que garantiza la integridad estructural de las ventanas y puertas a lo largo del tiempo." delay="750" margin=""/>

        </div>
      </div>
  </section>
  {/* End Services Section */}
</>

    </div>
  )
}

export default Servicios
