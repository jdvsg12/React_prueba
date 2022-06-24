import { Link } from 'react-router-dom'
import React from 'react'
import './cartWidget-model.css'


export const Cart = () => {
return (
    <div className='btnCount'>
        <Link to="/cart">carrito</Link>
    </div>
    )
}