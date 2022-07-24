import React, { useContext } from 'react';
import { context } from './CartContext'
import { Link } from 'react-router-dom';
import "./cart-model.css"


export const PaymentEmpty = () => {

    const data = useContext(context)

    console.log(data.idBuy)
    return (
        <div className="CartEmpty">
            <div>
                <h1>Tu compra se realizo correctamente</h1></div>
            <div> <h1>El id de compra es: <h2>{data.idBuy}</h2></h1>
            </div>
            <Link to="/">
                <span className="material-symbols-outlined">
                    chevron_left
                </span>
                Volver
            </Link>
        </div>
    )
}