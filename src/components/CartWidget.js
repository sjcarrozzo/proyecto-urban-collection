import { useCart } from "./CustomProvider"
import { Link } from "react-router-dom"

function CartWidget(){
         
    const contextValue = useCart()

    return(
        <Link to="/cart" id="cart-widget">
            <span id="cart-icon" className="material-icons" color="white">shopping_cart</span>
            <span id="cart-counter">{contextValue.counter}</span>
        </Link>
    )
}

export default CartWidget