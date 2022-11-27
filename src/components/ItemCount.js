import React from 'react'
import { useState } from 'react'

const ItemCount = ({handleOnConfirm, productStock}) => {
  
    const [ units, setUnits ] = useState(1)
    
    function handleAddToCart(){
        handleOnConfirm(units)
    }

    function handleSubstractUnit(){
        if ( units > 1 ) {
            setUnits( units - 1)
        }
        //por falso -> toasty error por numero negativo
    }
    
    function handleAddUnit(){
        if( units < productStock ){
            setUnits( units + 1)
        }
        //por falso -> toasty error por superar stock
    }
   
    return (
        <>
            <p>Agregar unidades:</p>
            <div className="add-products-container">
                <button className="button-units" onClick={handleSubstractUnit}>-</button>
                <span className="added-units">{units}</span>
                <button className="button-units" onClick={handleAddUnit}>+</button>
            </div>
            <button className="product-detail-button" onClick={handleAddToCart}>Agregar al carrito</button>
        </>
    )
}

export default ItemCount