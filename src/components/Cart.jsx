import React, { useContext } from 'react';
import { context } from './CartContext'
import { Link } from "react-router-dom"
import { CartListContainer } from './CartListContainer';
import { CartEmpty } from './CartEmpty';
import "./cart-model.css"



export const Cart = () => {

    const data = useContext(context)

    return (
        <div className="CardContainer">
            <div className='itmesContainer'>
                {data.countItem === 0 ? <CartEmpty /> : <CartListContainer />}
            </div>
            <div>
                {data.countItem === 0 ? null : <Link to="/form">Continuar Compra</Link>}
            </div>
            <div className="btnCard">
                <Link to="/">
                    <span className="material-symbols-outlined">
                        chevron_left
                    </span>
                    Volver
                </Link>
                <p>El precio total es <b>${data.price}</b></p>
                <button onClick={() => data.clear()}>Vaciar carrito</button>
            </div>
        </div>


    )
}