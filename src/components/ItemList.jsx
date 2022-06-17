import React from 'react';
import Items from './Items';

function ItemList({ products }) {

    return (
        
        products.map(products =>
                <Items
                    id={products.id}
                    title={products.title}
                    price={products.price}
                    image={products.image}
                    alt={products.alt}
                    key={products.id}
                />
        )
            
    )
}

export default ItemList 