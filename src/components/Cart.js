import { useState} from "react"
import { useCart } from "./CustomProvider"
import OrderForm from "./OrderForm"
import { db } from "./firebase"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"

const Cart = () => {
    const contextValue = useCart()
    const [confirmationCode, setConfirmationCode] = useState("")

    function handleOnConfirm(data,event){
        event.preventDefault()
        
        const orderProducts = contextValue.cart.map((productAndUnits)=>{
            return({ 
                name: productAndUnits.product.name,
                code: productAndUnits.product.code,
                price: productAndUnits.product.price,
                units: productAndUnits.units
            }) 
        })

        const order = {
            customer: {
               ...data
            },
            products: orderProducts ,
            totalPrice: contextValue.totalPrice,
            date: serverTimestamp()
        }

        const ordersCollection = collection(db, "orders")
        const response = addDoc(ordersCollection, order)
        
        response
            .then(  res => {
                setConfirmationCode(res.id)
                contextValue.emptyCart()
            })
            .catch(error=> console.log(error))
    }

    return ( 
        <>
            <p className="section-title">Carrito</p>
            { confirmationCode !== "" ? <p className="confirmation-code">Codigo de confirmacion: {confirmationCode}</p> : null }
            {   contextValue.cart.length !== 0 ? 
                <>
                    <div className="cart-container">
                        { contextValue.cart.map((productAndUnits)=>{
                            return ( 
                                <div key={productAndUnits.product.code} className="cart-item">
                                    <span className="product-name">{productAndUnits.product.name}</span>
                                    <span className="product-price">${productAndUnits.product.price}</span>
                                    <span className="product-units">{"x " + productAndUnits.units + " unidades"}</span>
                                    <div className="image-container">
                                        <img className="product-img" src={productAndUnits.product.imageSrc} alt={productAndUnits.product.imageAlt}></img>
                                    </div>
                                </div>)
                        })}
                    </div>
                    <p className="total-price">Precio total: ${contextValue.totalPrice}</p>
                    <OrderForm handleOnConfirm={handleOnConfirm}></OrderForm>
                    <div className="empty-button-container">
                        <button className="product-button" onClick={contextValue.emptyCart}>Vaciar carrito</button>
                    </div>
                </>: 
                <p className="text-info">No tenés productos agregados a tu carrito!</p>
            }
        </>
    )
}

export default Cart