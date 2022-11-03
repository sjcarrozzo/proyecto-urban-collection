import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

function NavBar(){

    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/category/camisas">Camisas</Link>
            <Link to="/category/buzos">Buzos</Link>
            <Link to="/category/jeans">Jeans</Link>
            <Link to="/contacto">Contacto</Link>
            <CartWidget/> 
        </nav>
    )
}

export default NavBar
