import React from 'react';
import Item from './Item';

function ItemList({ products }) {

    return (
        products.map(products =>
                <Item
                    id={products.id}
                    name={products.name}
                    image={products.image}
                    alt={products.alt}
                    key={products.id}
                />
        )

    )
}

export default ItemList 