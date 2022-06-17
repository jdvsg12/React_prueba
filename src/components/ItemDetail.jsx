import React from 'react';
import ItemCount from './ItemCount'


function ItemDetail({id, title, image, price, count, description}) {

    const onAdd = (countConfirm) => {

console.log("me llego " + countConfirm)

    }
    return (
       <div className="cardItem" key={id}>
            <img src={image} alt="" />
            <h1>{title}</h1>
            <p>{price}</p>
            <p>{description}</p>


            <ItemCount stock={count} initial={1} onAdd={onAdd}/>

        </div>
        )
}

export default ItemDetail