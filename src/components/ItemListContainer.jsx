import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { productsPromise } from '../utils/productsPromise';
import ItemList from './ItemList';
import { Loader } from './Loader'
import { db } from "../utils/firebase.js"
import { getDocs, collection, query, where   } from 'firebase/firestore';
import 'react-loading-skeleton/dist/skeleton.css'
import './itemListContainer-model.css'


const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const { category } = useParams()



    useEffect(() => {

        const collectionProducts = collection(db, "products")
        const refProducts = category ? query( collectionProducts , where('category', '==', category) ) :  collectionProducts
        const dataFirebase = getDocs(refProducts)



        setLoading(true)

        dataFirebase
            .then(resolve => {

                const productsFirebaseMap = resolve.docs.map(ref => {

                    const objFirebase = ref.data()
                    objFirebase.id = ref.id

                    return objFirebase
                })

                setItems(productsFirebaseMap)
                setLoading(false)

            })

        // productsPromise(category)
        //     .then(resolve => {
        //         setItems(resolve)
        //         setLoading(false)
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })
    }, [category])



    return (
        <div className="ItemListContainer">
            {loading ? <Loader /> : <ItemList product={items} />}
        </div>

    )

}

export default ItemListContainer