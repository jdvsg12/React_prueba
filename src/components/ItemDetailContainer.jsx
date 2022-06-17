import React from 'react';
import { useState, useEffect } from "react"
import { getProductsPromise } from '../utils/productsPromise';
import ItemDetail from './ItemDetail';



const ItemDetailContainer = () => {

    const [product, setProduct] = useState([])


    
    useEffect(() => {
        getProductsPromise(1000, 1)
        .then(resolve => {
            setProduct(resolve)
        })
        }, [])

        console.log(product)    
    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...product} />
        </div>
        )
}

export default ItemDetailContainer