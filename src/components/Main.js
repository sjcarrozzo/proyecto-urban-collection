import React from 'react'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
import { Routes, Route } from 'react-router-dom'
import Cart from "./Cart"

function Main(){
      
    return(
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
                <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
                <Route path="/contact" element={<h1>contacto</h1>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="*" element={<div className="error-message">ERROR NOT FOUND</div>}/>
            </Routes>
        </main>      
    )
}

export default Main