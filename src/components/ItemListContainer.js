import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import productsList from "./utils"

function ItemListContainer(){

    const [products,setProducts] = useState([])
    const {categoryId} = useParams()
    
    useEffect(()=>{
        getProducts(categoryId)
    },[categoryId])

    const getProducts = ((category)=>{
        
        let request = new Promise((res)=>{
            setTimeout(()=>{
                res(productsList)
            },2000)
        })

        request
        .then((productsResponse)=>{          

            if( category ){
                let filteredProducts = productsResponse.filter( product => product.category === category )      
                setProducts(filteredProducts)
            }else{
                setProducts(productsResponse)
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    })

    return (
        <>
            { products.length === 0 ? <div className="loading-message"><div className="loader">Loading...</div></div> : <ItemList productsList={products} categoryId={categoryId}/> }
        </>
    )
}

export default ItemListContainer