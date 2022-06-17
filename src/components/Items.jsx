import React from 'react';  

function Items({id, title, image, alt, price}) {

    return(
        <div className="cardItem" key={id}>
            <img src={image} alt={alt} />
            <h1>{title}</h1>
            <p>{price}</p>
            <button>Ver detalle</button>
        </div>
    
    )
}

export default Items