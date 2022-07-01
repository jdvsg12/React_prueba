import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productsPromise } from '../utils/productsPromise';
import ItemList from './ItemList';
import { Loader } from './Loader'
import 'react-loading-skeleton/dist/skeleton.css'
import './itemListContainer-model.css'


const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const { category } = useParams()



    useEffect(() => {

        setLoading(true)

        productsPromise(1000, category)
            .then(resolve => {
                setItems(resolve)
                setLoading(false)
            })
            .catch(error => {
                console.log(error);
            })
    }, [category])



    return (
        <div className="ItemListContainer">
            {loading ? <Loader /> : <ItemList product={items} />}
        </div>

    )

}

export default ItemListContainer