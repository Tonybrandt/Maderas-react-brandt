import React from 'react'
import './header.css'
import { BiChevronsRight } from "react-icons/bi";

export const Header = () => {
  return (
    <div className='content'>
        <h2 className='title'><span className='title__red'>JB</span>Maderas</h2>
        <p className='title__copy'>CALIDAD EN MADERAS, CALIDAD MISIONERA.</p>
        <button className='header--button'>Contactanos por WhatsApp <BiChevronsRight/></button>
    </div>
  )
}
