import React, { useState, useContext } from "react";
import { context } from './CartContext'
import { serverTimestamp } from 'firebase/firestore'
import { db } from "../utils/firebase.js"
import { collection, addDoc } from 'firebase/firestore';
import './form-model.css'



export const Form = () => {

    const data = useContext(context)


    const [user, setUser] = useState({ name: "", email: "", phone: "", message: "" })


    const handleChange = (e) => {
        const { name, value } = e.target

        setUser({
            ...user,
            [name]: value
        })

    }

    const handleSubmit = (e) => {

        e.preventDefault()

        const itemToForm = data.item.map((prod) => {
            return {
                id: prod.id,
                title: prod.title,
                image: prod.image,
                amount: prod.quantityToAdd,
            }
        })
        const itemPriceTotal = data.price

        const objOrder = {
            buyer: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                message: user.message
            },
            itemToForm,
            itemPriceTotal,
            date: serverTimestamp()

        }

        const orderBuy = collection(db, "orders")

        addDoc(orderBuy, objOrder).then((respons) => {
            data.setIdBuy(respons.id)
            data.setItems([])
            data.setCountItem(0)
        })
    }


    return (
        <div className="formBuy">
            <form onSubmit={handleSubmit}>
                <h2>Formulario de compra</h2>
                <input type="text" id="name" placeholder="Nombre" onChange={handleChange} name="name" required />
                <input type="email" id="email" placeholder="Email" onChange={handleChange} name="email" requiered/>
                <input type="text" id="phone" placeholder="Telefono" onChange={handleChange} name="phone" required/>
                <textarea id="message" placeholder="Agregar información" onChange={handleChange} name="message"></textarea>
                <button>comprar</button>
            </form>
            <div className="resumePrice">
                <h2>Resumen de compra</h2>
                {data.item.map(product =>
                    <div key={product.id}>
                        <p><b>{product.title}</b></p>
                        <p>Cant. {product.quantityToAdd} x <b>${product.price}</b> = {product.quantityToAdd * product.price}</p>
                    </div>)}
                <h2>{data.price}</h2>
            </div>
        </div>
    )
}