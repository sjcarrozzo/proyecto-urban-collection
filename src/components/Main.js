import React from 'react'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
import { Routes, Route } from 'react-router-dom'

function Main(){
      
    return(
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
                <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
                <Route path="/contacto" element={<h1>contacto</h1>}/>
                <Route path="*" element={<div className="error-message">ERROR 404</div>}/>
            </Routes>
        </main>      
    )
}

export default Main