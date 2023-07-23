import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <div className='body-footer' >
    <footer className="footer-links">
        <div className="footer-container">
            <ul className="ul">
                <li>
                    <h3 className="footer-title">
                        INFO JB Maderas
                    </h3>
                </li>
                <li>
                    <a className="footer-link" href="https://www.google.es/maps/place/JB+Wood,+in+Anizacate/@-31.691166,-64.4054987,17z/data=!3m1!4b1!4m5!3m4!1s0x942d56eb76608d8b:0x646aa7971a62fa56!8m2!3d-31.691166!4d-64.40331" target="_blank">Ruta provincial 5, km 32 1/ <br/>Anisacate, Córdoba, Argentina</a>
                </li>
                <li>
                    <p></p>
                </li>

            </ul>

            <ul className="ul">
                <li>
                    <a className="footer-link" href="contacto.html">
                        <h3>CONTACTOS</h3>
                    </a>
                </li>
                <li>
                    <p>Te: (03547)-494857
                    </p>
                </li>
                <li>
                    <a className="footer-link" href="mailto:maderasmisionerasjb@gmail.com" >maderasmisionerasjb@gmail.com</a>
                </li>
            </ul>
        </div>
        
        <div className="footer">
            <h4>©2021 JB Maderas</h4>
        </div>
        
    </footer>
    </div>
  )
}
