import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

function Header(){
    return(
        <header>
            <Link to="/">
                <span className="brand">Urban Collection</span>
            </Link>
            <NavBar/>
        </header>
    )
}

export default Header