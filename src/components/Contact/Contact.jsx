import React from 'react'
import './Contact.scss'
import mail from '../../assets/mail1.png'

export const Contact = () => {
  return (
    <div>
        <article className="contact-title">
    <h2>Formulario de contacto</h2>
    <p>Si tienes alguna consulta o duda, por favor no dudes en ponte en contacto con nosotros a través de nuestro formulario.
    </p>
</article>

<div className="flex-container">
    <form className="form">
        <div className="form__section">
            <input type="text" name="Nombre completo" className="form__input" placeholder="Apellido y nombre"/>
        </div>
        <div className="form__section">
            <input type="email" name="" className="form__input" placeholder="E-mail"/>
        </div>
        <div className="form__section">
            <textarea className="form__input" name="" id="" cols="30" rows="10" placeholder="Escriba su mensaje"></textarea>
        </div>
        <div>
            <input type="submit" className="form__input"/>
        </div>
    </form>
    <div className="form-img">
        <img src={mail} alt="Icono de email"/>
    </div>
</div>
    </div>
  )
}
