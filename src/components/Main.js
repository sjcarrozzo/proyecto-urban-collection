import React from 'react'
import ItemListContainer from './ItemListContainer'


function Main(prop){
    
    let userName = prop.userName    
    
    return(
        <main>
            <ItemListContainer userName="Sebastian"/>
            <div className="hero">
                <p className="hero-title">Bienvenidos a <span className="hero-brand">Urban Collection</span></p>
                <p className="hero-text">Contamos con lo último en indumentaria para vos</p>
                <button className="hero-button">Shop Now</button>
            </div>
            <img src="/img/girl-yellow-dress.webp"></img>
        </main>            
    )
}

export default Main