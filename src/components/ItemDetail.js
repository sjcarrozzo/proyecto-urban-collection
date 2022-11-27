import ItemCount from './ItemCount'
import { useCart } from "./CustomProvider"

const ItemDetail = ({product}) => {
  
    const contextValue = useCart() 
    
    function handleOnConfirm(units){
        contextValue.addUnitsOfProduct(units, product)
    }

    return (
        <>
            <div className="image-detail-container">
                <img className="product-img" src={product.imageSrc} alt={product.imageAlt}></img>
            </div>
            <div className="product-detail">
                <span className="product-detail-name">{product.name}</span>
                <p className="product-detail-description">{product.description}</p>
                <span>Stock: {product.stock}</span>
                <div className="product-column">
                    <span className="product-detail-price">${product.price}</span>
                    <ItemCount handleOnConfirm={handleOnConfirm} productStock={product.stock}/>
                </div>
            </div>
        </>
    )
}

export default ItemDetail