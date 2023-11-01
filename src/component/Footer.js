import React from 'react'

function Footer() {
  return (
    <div>
      <section id="topbar" className="d-flex align-items-center">
  <div className="container d-flex justify-content-center justify-content-md-between">
    <div className="contact-info d-flex align-items-center">
      <i className="bi bi-envelope-fill" />
      <a href="mailto:contact@example.com">aluminioitalia@hotmail.com</a>
      <i className="bi bi-phone-fill phone-icon" /> 221 317-9327
    </div>
    <div className="social-links d-none d-md-block">
      <a href="#" className="facebook">
        <i className="bi bi-facebook" />
      </a>
      <a href="https://www.instagram.com/aluminioitalia" className="instagram">
        <i className="bi bi-instagram" />
      </a>
    </div>
  </div>
</section>
    </div>
  )
}

export default Footer
