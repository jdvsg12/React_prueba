import React, { useContext } from 'react';
import { context } from './CartContext'
import "./cart-model.css"



export const Cart = () => {

    const data = useContext(context)

    return (
        <div className="CardContainer">
        {data.item.map(product =>
            
            <div className="CardItem" key={product.id}>
                <img src={product.image} alt="" />
                <div>
                <h1>{product.title}</h1>
                <h2>${product.price}</h2>
                <h2>Cantidad {product.quantityToAdd}</h2>
                </div>
                <button onClick={() => data.removeItemFromCart(product.id)}>Eliminar</button>
            </div>)}

            <button onClick={() => data.clear()}>Vaciar carrito</button>
            </div>

    )
}