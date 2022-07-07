import React, { useContext } from 'react';
import { context } from './CartContext'
import { Link } from "react-router-dom"
import { CartListContainer } from './CartListContainer';
import "./cart-model.css"
import { CartEmpty } from './CartEmpty';



export const Cart = () => {

    const data = useContext(context)

    return (
        <div className="CardContainer">

            {data.countItem === 0 ? <CartEmpty /> : <CartListContainer />}

            <div className="btnCard">
                <Link to="/">
                    <span className="material-symbols-outlined">
                        chevron_left
                    </span>
                    Volver
                </Link>
                <p>El precio total es {data.price}</p>
                <button onClick={() => data.clear()}>Vaciar carrito</button>
            </div>
        </div>


    )
}