import React, { useContext } from 'react';
import { context } from './CartContext'
import { Form } from './Form';
import { PaymentEmpty } from './PaymentEmpty';
import "./cart-model.css"

export const PaymentChanel = () => {

    const data = useContext(context)

    return (
        <div>
            {data.item.length === 0 ? <PaymentEmpty /> : <Form />}
        </div>
    )
}