import { createContext, useState } from "react";

export const context = createContext()

const Provider = context.Provider

const MyDataCart = ({ children }) => {
    const [countItem, setCountItem] = useState()

    const addCantItemToCart = (...item) => {

        setCountItem(item)
    }
    
    const dataOfContext = { 
        countItem: countItem,
        addCantItemToCart: addCantItemToCart,
    }

    return (
        <Provider value={dataOfContext}>
            {children}
        </Provider>
    )
}

export default MyDataCart