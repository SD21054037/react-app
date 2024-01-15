import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-elements-1">
          <h2 className="snel-naar">
            Snel naar...
          </h2>
          <a href='https://www.accessibility.nl/actueel' className="actueel">Actueel </a> 
          <a href='' className="algemene-voorwaarden">Algemene voorwaarden </a>
          <a href='' className="privacy-policy">Privacy Policy </a>
          <a href='' className="faq">FAQ </a> 
        </div>
        <div className="footer-contact">
          <h2 className="contact">Contact </h2>
          <p  className="_030-239-82-70">030 - 239 82 70</p>
          <p  className="info-accessibility">info@accessibility</p>
        </div>
        <div className="footer-elements-2">
          <a href='' className="hoe-wij-helpen">Hoe wij helpen </a>
          <a href='https://www.accessibility.nl/audits' className="audits">Audits </a> 
          <a href='https://www.accessibility.nl/gebruikersonderzoek' className="gebruikersonderzoek">Gebruikersonderzoek </a> 
          <a href='https://www.accessibility.nl/hoe-wij-helpen/trainingen' className="trainingen">Trainingen </a> 
          <a href='https://www.accessibility.nl/advies' className="advies">Advies </a> 
        </div>
      </footer>
  )
}

export default Footer