import Item from './Item'

function ItemList({productsList, categoryId}){

    return( 
        <>
            <h2 className="section-title">
                { categoryId === undefined ? "catálogo" : categoryId }
            </h2>
            <section className="products-container">
            { productsList.map(
                (product) => { 
                    return( 
                       <Item product={product} key={product.id}/>
                    )}
                )}
            </section>        
        </>
    )
}

export default ItemList