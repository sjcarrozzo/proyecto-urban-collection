import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { db } from "./firebase"
import { getDoc, doc, collection } from "firebase/firestore"

const ItemDetailContainer = () => {

    const { itemId } = useParams()
    const [product, setProduct] = useState({})
    
    useEffect(()=>{
        const productsCollection = collection(db,"products")
        const reference = doc(productsCollection, itemId)
        const response = getDoc(reference)
    
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