import React, { useState, useContext } from "react";
import { context } from './CartContext'
import './form-model.css'



export const Form = () => {

    const data = useContext(context)

    console.log(data)

    const [user, setUser] = useState([])


    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.elements.name.value
        const email = e.target.elements.email.value
        const number = e.target.elements.telefono.value
        const message = e.target.elements.message.value

        setUser({ name, email, number, message })

        console.log(user)
    }

    return (
        <div className="formBuy">
            <form onSubmit={handleSubmit}>
                <h2>Formulario de compra</h2>
                <input type="text" id="name" placeholder="Nombre" />
                <input type="text" id="email" placeholder="Email" />
                <input type="text" id="telefono" placeholder="Telefono" />
                <textarea id="message" placeholder="Agregar información"></textarea>
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