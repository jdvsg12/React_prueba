import React from 'react';
import Items from './Items';

function ItemList({ product }) {

    return (
        
        product.map(product =>
                <Items
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    alt={product.alt}
                    key={product.id}
                />
        )
            
    )
}

export default ItemList 