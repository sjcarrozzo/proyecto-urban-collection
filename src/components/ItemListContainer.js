import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import { getAllProducts, getProductsWithCategory } from "./firebase"

function ItemListContainer(){

    const [products,setProducts] = useState([])
    const {categoryId} = useParams()
    
    useEffect(()=>{
        getProducts(categoryId)
    },[categoryId])

    const getProducts = ((category)=>{
        
        let response

        if( category ){
            response = getProductsWithCategory(categoryId)
        }else{
            response = getAllProducts()
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