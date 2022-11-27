import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import { db } from "./firebase"
import { collection, getDocs, query,where } from "firebase/firestore"

function ItemListContainer(){

    const [products,setProducts] = useState([])
    const {categoryId} = useParams()
    
    useEffect(()=>{
        getProducts(categoryId)
    },[categoryId])

    const productsCollection = collection(db,"products")

    const getProducts = ((category)=>{
        
        let response

        if( category ){
            
            const categoryQuery = query(productsCollection, where("category","==",category))
            response = getDocs(categoryQuery)

        }else{
            response = getDocs(productsCollection)
        }
    
        response
            .then((productsResponse)=>{          

                const products = productsResponse.docs.map( doc => ({ ...doc.data(), id: doc.id }))
                setProducts(products)
            })
            .catch((error)=>{
                console.log(error)
            })
    })

    return (
        <>
            { products.length === 0 ? <div className="loader">Loading...</div> : <ItemList productsList={products} categoryId={categoryId}/> }
        </>
    )
}

export default ItemListContainer