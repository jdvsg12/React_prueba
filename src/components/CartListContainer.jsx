import React, { useContext } from 'react';
import { context } from './CartContext'
import { Link } from 'react-router-dom';
import "./cart-model.css"


export const CartListContainer = () => {

    const data = useContext(context)

    return (
        <div>
            {data.item.map(product =>
                <div className="CardItem" key={product.id}>
                    <img src={product.image} alt="" />
                    <div className='detailItem'>
                        <Link id="a" to={`/detail/${product.id}`}>
                            {product.title}
                        </Link>
                        <p>Cant. {product.quantityToAdd} x <b>${product.price}</b> = {product.quantityToAdd * product.price}</p>
                    </div>
                    <button onClick={() => data.removeItemFromCart(product.id)}>
                        <span class="material-symbols-outlined">
                            delete
                        </span>
                    </button>
                </div>)}
            <div className='buyBotton'>
                {data.countItem === 0 ? null : <Link to="/paymentChanel">Continuar Compra</Link>}
            </div>
        </div>
    )
}