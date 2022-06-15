import React from 'react';
import { useState, useEffect } from "react"
import { singleProduct } from '../utils/products';
import { productPromise } from '../utils/productsPromise';
import ItemDetail from './ItemDetail';



const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})

    useEffect(() => {
        productPromise(1000, singleProduct)
            .then(product => {
                setProduct(product);
            })

            .catch(error => {
                console.log(error);
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