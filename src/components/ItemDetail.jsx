import React from 'react';


function ItemDetail({id, title, image, price}) {
    return (
       <div className="cardItem" key={id}>
            <img src={image} alt="" />
            <h1>{title}</h1>
            <p>{price}</p>
        </div>
        )
}

export default ItemDetail