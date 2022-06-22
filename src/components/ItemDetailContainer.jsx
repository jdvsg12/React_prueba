import React from 'react';
import { useState, useEffect } from "react"
import { getProductsIdPromise } from '../utils/productsPromise';
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail';



const ItemDetailContainer = () => {

    const [product, setProduct] = useState([])

    const { id } = useParams()

    useEffect(() => {
        getProductsIdPromise(1000, parseInt(id))
            .then(resolve => {
                setProduct(resolve)
            })
    }, [id])

    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer