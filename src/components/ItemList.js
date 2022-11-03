import React from 'react'
import Item from './Item'

function ItemList({productsList, categoryId}){

    return( 
        <>
            { categoryId === undefined ? <h2 className="section-title">catálogo</h2> : <h2 className="section-title">{categoryId}</h2>}
            <section className="products-container">
            { productsList.map(
                (product) => { 
                    return( 
                       <Item product={product}/>
                    )}
                )}
            </section>        
        </>
    )
}

export default ItemList