import { createContext, useState } from "react";
import Swal from 'sweetalert2'



export const context = createContext()

const Provider = context.Provider

const MyDataCart = ({ children }) => {
    const [items, setItems] = useState([])
    const [price, setPrice] = useState([])
    const [countItem, setCountItem] = useState(0)
    const [idBuy, setIdBuy] = useState([])


    const addItemToCart = (item, quantityToAdd) => {
        debugger
        const updatedItems = items.concat(item);

        calculateTotalPrice(updatedItems)
        calculateTotalItem(updatedItems)
        SweetAlertAddItem()


        if (isOnCart(item.id)) {
            addItems(item, quantityToAdd)

        } else {
            setItems(oldItems => oldItems.concat(item))
        }

    }



    const removeItemFromCart = (id) => {

        const updatedItems = items.filter(prod => prod.id !== id);
        setItems(updatedItems);
        calculateTotalPrice(updatedItems)
        calculateTotalItem(updatedItems)
        SweetAlertDeleteItem()
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

        setPrice(0)
        setItems([])
        setCountItem(0)
        sweetAlertDeleteAllItem()
    }

    const calculateTotalPrice = (cartItems) => {
        if (cartItems.length === 0) return setPrice(0);

        const totalPrice = cartItems.reduce((total, { price, quantityToAdd }) => {

            return (price * quantityToAdd) + total

        }, 0)

        setPrice(totalPrice)
    }

    const calculateTotalItem = (cartItems) => {

        if (cartItems.length === 0) return setCountItem(0);


        const totalCountItem = cartItems.reduce((count, { quantityToAdd }) => {

            return quantityToAdd + count

        }, 0)

        setCountItem(totalCountItem)

    }

    const SweetAlertAddItem = () => {

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'success',
            title: 'Ha sido agregado a tu carrito'
        })
    }

    const SweetAlertDeleteItem = () => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'warning',
            title: 'Ha sido eliminado de tu carrito'
        })
    }

    const sweetAlertDeleteAllItem = () => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'warning',
            title: 'Vaciaste tu carrito'
        })
    }


    const dataOfContext = {
        idBuy,
        countItem: countItem,
        item: items,
        price: price,
        addItemToCart,
        removeItemFromCart,
        addCant: addItems,
        isOnCart,
        clear,
        setIdBuy,
        setItems,
        setCountItem
    }

    return (
        <Provider value={dataOfContext}>
            {children}
        </Provider>
    )
}

export default MyDataCart