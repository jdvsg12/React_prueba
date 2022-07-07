import React, { useContext } from 'react';
import { context } from './CartContext'
import "./cart-model.css"


export const CartListContainer = () => {

    const data = useContext(context)

    return (
        data.item.map(product =>

            <div className="CardItem" key={product.id}>
                <img src={product.image} alt="" />
                <div>
                    <h1>{product.title}</h1>   
                    <p>Cant. {product.quantityToAdd} x <b>${product.price}</b> = {product.quantityToAdd * product.price}</p>
                </div>
                <button onClick={() => data.removeItemFromCart(product.id)}>Eliminar</button>
            </div>)
    )
}