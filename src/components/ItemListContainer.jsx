import React, {useState, useEffect  } from 'react';
import {products} from '../utils/products';
import { productsPromise } from '../utils/productsPromise';
import ItemList from './ItemList';

// import ItemCount from "../components/ItemCount.jsx"

const ItemListContainer = () => {

    const [items, setItems] = useState([])

    useEffect(() =>{
        productsPromise(1000, products)
        .then(product => setItems(product))
        .catch(error => {
            console.log(error);
        })
    }, [items])

    return (
        <div className="ItemListContainer">
        <ItemList products={items}/>
        </div>

    )

}

export default ItemListContainer