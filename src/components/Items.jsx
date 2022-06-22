import React from 'react';  
import { Link } from 'react-router-dom'
import { LoaderSkeleton } from './Loader'


function Items({id, title, image, alt, price}) {

    return(
        <div className="cardItem" key={id}>
            <img src={image} alt={alt} />
            <h1>{title}</h1>
            <p>{price}</p>
            <Link to={`/detail/${id}`}>Ver detalle</Link>
            <LoaderSkeleton />
        </div>
    
    )
}

export default Items