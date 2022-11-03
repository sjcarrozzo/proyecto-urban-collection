import React from 'react'
import {Link} from 'react-router-dom'

const Item = ({product}) => {
    
    return (
    <div className="product" key={product.code}>
        <span className="product-name">{product.name}</span>
            <img className="product-img" src={product.imageSrc} alt={product.imageAlt}></img>
            <div className="product-column">
                <span className="product-price">${product.price}</span>
                <button className="product-button"><Link to={"/item/" + product.code}>Ver más</Link></button>
            </div>
    </div>
  )
}

export default Item