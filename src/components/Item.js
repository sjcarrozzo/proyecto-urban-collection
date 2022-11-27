import React from 'react'
import {Link} from 'react-router-dom'

const Item = ({product}) => {
    
    return (
        <div className="product">
            <span className="product-name">{product.name}</span>
            <div className="image-container">
            <img className="product-img" src={product.imageSrc} alt={product.imageAlt}></img>
            </div>
            <div className="product-column">
                <span className="product-price">${product.price}</span>
                <Link to={"/item/" + product.id}><button className="product-button">Ver más</button></Link>
            </div>
        </div>
    )
}

export default Item