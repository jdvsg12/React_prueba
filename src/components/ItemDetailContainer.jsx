import React from 'react'
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail';
import { db } from "../utils/firebase.js"
import { getDoc, collection, doc} from 'firebase/firestore';

const ItemDetailContainer = () => {

    const [product, setProduct] = useState([])

    const { id } = useParams()

    useEffect(() => {

        const collectionProducts = collection(db, "products")
        const refProducts = doc(collectionProducts, id)
        const dataFirebase = getDoc(refProducts)


        dataFirebase
            .then(resolve => {
                const objFirebase = resolve.data()
                    objFirebase.id = resolve.id
                    setProduct(objFirebase)
                })

    }, [id])

    return (
        <div>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer