import React from 'react';  

function Item({id, name,image, alt}) {

    return(
        <div className="cardItem" key={id}>
            <img src={image} alt={alt} />
            <h1>{name}</h1>
            <p>{id}</p>
            {/* <div className="btnCount">
                <button>+</button>
                <button>-</button>
                <button>Confirmar</button>
            </div> */}
        </div>
    
    )
}

export default Item