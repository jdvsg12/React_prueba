import React, { useContext } from 'react';
import { context } from './CartContext'
import './cartWidget-model.css'


export const CartWidgets = () => {

    const data = useContext(context)

    return (
        <div className="cartItem">
            <span className="material-symbols-outlined">
                shopping_cart_checkout
            </span>
            <div className="cantItemNumber">{data.countItem}</div>
        </div>

    )
}


