import React from 'react'
import { useParams } from 'react-router-dom'
import productsList from "./utils"

const ItemDetailContainer = () => {
    
    const { itemId } = useParams()
    let productoAMostrar = productsList.find( product => product.code === parseInt(itemId) )

    return (
        <section className="product-detail-container">
            <img className="image-detail" src={productoAMostrar.imageSrc} alt={productoAMostrar.imageAlt}></img>
            <div className="product-detail">
                <span className="product-detail-name">{productoAMostrar.name}</span>
                <p className="product-detail-description">{productoAMostrar.description}</p>
                <div className="product-column">
                    <span className="product-detail-price">${productoAMostrar.price}</span>
                    <button className="product-detail-button">Comprar</button>
                </div>
            </div>   
        </section>   
    )
}

export default ItemDetailContainer