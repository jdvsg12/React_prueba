import React, {useState, useEffect  } from 'react';
import personFetch from '../utils/personFetch';
import products from '../utils/products';
import ItemList from './ItemList';

// import ItemCount from "../components/ItemCount.jsx"

const ItemListContainer = () => {

    const [items, setItems] = useState([])

    useEffect(() =>{
        personFetch(3000, products)
        .then(product => setItems(product))
    }, [items])

    return (
        <div className="ItemListContainer">
        <ItemList products={items}/>
        </div>

    )

}

export default ItemListContainer