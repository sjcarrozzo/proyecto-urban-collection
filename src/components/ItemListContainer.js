import React from 'react'

function ItemListContainer(prop){

    return(
        <div>
            <p className="userName">¡Hola {prop.userName}!</p>
        </div>
    )

}
export default ItemListContainer