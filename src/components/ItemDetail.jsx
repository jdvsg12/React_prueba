import React, { useState, useContext } from 'react';
import ItemCount from './ItemCount'
import { context } from './CartContext';
import { ButtonCart } from './ButtonCart';
import './itemDetailContainer-model.css'

function ItemDetail({ id, title, image, price, count, description }) {

    const data = useContext(context)
    const [CountPrice, setCountPrice] = useState(true)

    

    const onAdd = (quantityToAdd) => {


        const items = {id, title, image, price, description, quantityToAdd}

        const itemPrice = quantityToAdd * items.price

        setCountPrice(quantityToAdd)
        
        data.addItemToCart(items, itemPrice, quantityToAdd)

    
    }

    return (
        <div className="cardDetail" key={id}>
            <img src={image} alt="" />
            <div className="DetailInfo">
                <h1>{title}</h1>
                <h2>$ {price}</h2>
                <p>{description}</p>
                <div>
                    {CountPrice === true ? <ItemCount stock={count} initial={1} onAdd={onAdd} /> : <ButtonCart />}
                </div>
            </div>

        </div>
    )
}

export default ItemDetail