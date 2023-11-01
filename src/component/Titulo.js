import React from 'react'

function Titulo() {
    return (
        <div>
            <section id="hero" className="align-items-center ">
                <div
                    className="position-relative "
                    data-aos="fade-up"
                    data-aos-delay={500}                >
                    <img className="logoitalia" src={process.env.PUBLIC_URL + '/assets/img/icoitalia4.png'} alt="logo aluminio italia" />
                    <h1>ALUMINIO ITALIA</h1>
                    <h2>Cerramientos en aluminio</h2>
                </div>
            </section>
        </div>
    )
}

export default Titulo
