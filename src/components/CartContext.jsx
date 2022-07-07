import { createContext, useState } from "react";


export const context = createContext()

const Provider = context.Provider

const MyDataCart = ({ children }) => {
    const [items, setItems] = useState([])
    const [price, setPrice] = useState([])


    const addItemToCart = (item, quantityToAdd) => {
debugger
        const updatedItems = items.concat(item);

        calculateTotalPrice(updatedItems)

        if (isOnCart(item.id)) {
            addItems(item, quantityToAdd)

        } else {
            setItems(oldItems => oldItems.concat(item))
        }

    }



    const removeItemFromCart = (id) => {
        const updatedItems = items.filter(prod => prod.id !== id);
        console.log(updatedItems)
        setItems(updatedItems);
        calculateTotalPrice(updatedItems)
    }

    const addItems = (item, quantityToAdd) => {

        const newProducts = items.map(prod => {

            if (prod.id === item.id) {
                const newProduct = {
                    ...prod,
                    quantityToAdd: prod.quantityToAdd + quantityToAdd,
                };
                return newProduct;

            } else { return prod; }
        });

        setItems(newProducts)
    }

    const isOnCart = (id) => items.some((valor) => valor.id === id)


    const clear = () => {

        setPrice([])
        setItems([])
    }

    const calculateTotalPrice = (cartItems) => {
        if (cartItems.length === 0) return setPrice(0);

        const totalPrice = cartItems.reduce((total, {price, quantityToAdd}) => {

            return (price * quantityToAdd) + total

        }, 0)

        setPrice(totalPrice)
    }


    const dataOfContext = {
        countItem: items.length,
        item: items,
        price: price,
        addItemToCart,
        removeItemFromCart,
        addCant: addItems,
        isOnCart,
        clear,
    }

    return (
        <Provider value={dataOfContext}>
            {children}
        </Provider>
    )
}

export default MyDataCart