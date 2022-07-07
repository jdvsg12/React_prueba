import { Link } from 'react-router-dom'
import React from 'react'
import './cartWidget-model.css'


export const ButtonCart = () => {
return (
    <div className='btnCount'>
        <Link to="/cart">carrito</Link>
    </div>
    )
}