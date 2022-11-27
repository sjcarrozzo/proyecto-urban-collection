import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { getProductWithId } from "./firebase"

const ItemDetailContainer = () => {

    const { itemId } = useParams()
    const [product, setProduct] = useState({})
    
    useEffect(()=>{
        const response = getProductWithId(itemId)
    
        response
            .then((productResponse) =>{
                setProduct(productResponse.data())
            })
            .catch( error =>{ 
                console.log(error)
            })
    },[])
    
    return(
        <section className="product-detail-container">
            <ItemDetail product={product}/>
        </section>
    )
}

export default ItemDetailContainer