import React,{useState} from 'react'

function CartWidget(){
    
    let [productsNumber, addProduct] = useState(0)        
    
    return(
        <div id="cart-widget">
            <span id="cart-icon" className="material-icons" color="white">shopping_cart</span>
            <span id="cart-counter">{productsNumber}</span>
        </div>
    )
}

export default CartWidget


