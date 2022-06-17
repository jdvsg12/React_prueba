import React from 'react';  

function Item({id, title, image, alt, price,}) {

    return(
        <div className="cardItem" key={id}>
            <img src={image} alt={alt} />
            <h1>{title}</h1>
            <p>{price}</p>

            {/* <div className="btnCount">
                <button>+</button>
                <button>-</button>
                <button>Confirmar</button>
            </div> */}
        </div>
    
    )
}

export default Item