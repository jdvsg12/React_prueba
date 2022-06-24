import React, { useState } from 'react';
import ItemCount from './ItemCount'
import { Cart } from './Cart';
import './itemDetailContainer-model.css'

function ItemDetail({ id, title, image, price, count, description }) {

    const [quantityToAdd, setQuantityToAdd] = useState(true)

    const onAdd = (quantityToAdd) => {

        setQuantityToAdd(quantityToAdd)
    }

    console.log(quantityToAdd)

    return (
        <div className="cardDetail" key={id}>
            <img src={image} alt="" />
            <div className="DetailInfo">
                <h1>{title}</h1>
                <h2>$ {price}</h2>
                <p>{description}</p>
                <div>
                    {quantityToAdd === true ? <ItemCount stock={count} initial={1} onAdd={onAdd} /> : <Cart />}
                </div>
            </div>

        </div>
    )
}

export default ItemDetail