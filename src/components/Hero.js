import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
        <div className="hero">
        <p className="hero-title">Bienvenidos a <span className="hero-brand">Urban Collection</span></p>
        <p className="hero-text">Contamos con lo último en indumentaria para vos</p>
        <button className="hero-button"><Link to="/productos">Shop Now</Link></button>
        </div>
        <img className="hero-img" src="/img/girl-yellow-dress.webp" alt="Urban Collection yellow dress girl"></img>
    </>
  )
}

export default Hero