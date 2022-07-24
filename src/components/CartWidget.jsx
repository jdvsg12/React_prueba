import React, { useContext } from 'react';
import { context } from './CartContext'
import { Link } from "react-router-dom"
import './cartWidget-model.css'


export const CartWidgets = () => {

    const data = useContext(context)

    return (
        <div className="cartItem">
            <Link to="/cart">
            <span id='shopping' className="material-symbols-outlined">
                shopping_cart_checkout
            </span>
            </Link>
            <div className="cantItemNumber">
                {data.countItem}
                </div>
        </div>

    )
}


