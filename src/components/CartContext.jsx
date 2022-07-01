import { createContext, useState } from "react";

export const context = createContext()

const Provider = context.Provider

const MyDataCart = ({ children }) => {
    const [items, setItems] = useState([])


    const addItemToCart = (item, quantityToAdd) => {

        if (isOnCart(item.id)) {

            addCant(item, quantityToAdd)

        } else {
            setItems(oldItems => oldItems.concat(item))
            console.log("falso")
        }

    }


    const removeItemFromCart = (id) => {

        setItems(items.filter(prod => prod.id !== id))

    }


    const addCant = (item, quantityToAdd) => {

        console.log(item)
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

        setItems([])
    }


    const dataOfContext = {
        countItem: items.length,
        item: items,
        addItemToCart,
        removeItemFromCart,
        addCant,
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