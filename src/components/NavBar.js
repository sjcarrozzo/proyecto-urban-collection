import React from 'react'
import CartWidget from './CartWidget'

function NavBar(){

    return(
        <nav>
            <a href="#">Home</a>
            <a href="#">Productos<span className="material-icons">arrow_drop_down</span></a>
            <a href="#">Contacto</a>
            <a href="#">Faqs</a>
            <CartWidget/> 
        </nav>
    )
}

export default NavBar
