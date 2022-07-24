import React, { useContext } from 'react';
import { context } from './CartContext'
import { Link } from "react-router-dom"
import { CartListContainer } from './CartListContainer';
import { CartEmpty } from './CartEmpty';
import "./cart-model.css"



export const Cart = () => {

    const data = useContext(context)

    console.log(data.countItem)

    return (
        <div className="CardContainer">
            <div className='itmesContainer'>
                {data.countItem.length === 0 | data.countItem === 0? <CartEmpty /> : <CartListContainer />}
            </div>
            <h1>El precio total es <b>${data.price}</b></h1>

            <div className="btnCard">
                <Link to="/">
                    <span className="material-symbols-outlined">
                        chevron_left
                    </span>
                    Volver
                </Link>
                <button onClick={() => data.clear()}>Vaciar carrito</button>
            </div>
        </div>


    )
}