import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-elements-1">
          <div className="snel-naar">
            <span className="snel-naar-span">Snel naar..</span>
            <span className="snel-naar-span2">.</span>
          </div>
          <div className="actueel">Actueel </div>
          <div className="algemene-voorwaarden">Algemene voorwaarden </div>
          <div className="privacy-policy">Privacy Policy </div>
          <div className="faq">FAQ </div>
        </div>
        <div className="footer-contact">
          <div className="contact">Contact </div>
          <div className="_030-239-82-70">030 - 239 82 70 </div>
          <div className="info-accessibility">info@accessibility </div>
        </div>
        <div className="footer-elements-2">
          <div className="hoe-wij-helpen">Hoe wij helpen </div>
          <div className="audits">Audits </div>
          <div className="gebruikersonderzoek">Gebruikersonderzoek </div>
          <div className="trainingen">Trainingen </div>
          <div className="advies">Advies </div>
        </div>
      </footer>
  )
}

export default Footer