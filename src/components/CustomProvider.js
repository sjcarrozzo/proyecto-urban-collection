import { createContext, useState, useContext } from 'react'
export const context = createContext()
const { Provider } = context

export const useCart = () => {
    return useContext(context)
}

const CustomProvider = ({children}) => {
  
    const [ counter, setCounter ] = useState(0)
    const [ cart , setCart ] = useState([])
    const [ totalPrice , setTotalPrice ] = useState(0)
    
    const emptyCart = ()=>{
        setCart([])
        setCounter(0)
        setTotalPrice(0)
    }

    const addUnitsOfProduct = (units, product)=>{
        
        const productAndUnitsIndex = cart.findIndex( productAndUnits => productAndUnits.product.code === product.code )

        if( productAndUnitsIndex !== -1 ){
            const newCart = cart.map((pAndU)=>{
                return ( 
                    pAndU.product.code === product.code ? 
                    { product: pAndU.product, units: pAndU.units + units } :
                    pAndU
                )
            })
            setCart([...newCart ])

        }else{
            setCart([...cart, {product: product, units: units}])
        }

        setCounter(counter + units)
        setTotalPrice( totalPrice + product.price * units)
    }

    const contextValue = {
        cart: cart,
        counter: counter,
        totalPrice: totalPrice,
        emptyCart: emptyCart,
        addUnitsOfProduct: addUnitsOfProduct
    }

  return (
    <Provider value={contextValue}>
        {children}
    </Provider>
  )

}

export default CustomProvider