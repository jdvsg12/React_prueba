import { products } from '../utils/products';



export const productsPromise = (time, category) => {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(category ? products.filter(prod => prod.category === category) : products);
        }, time)
    })

}

export const getProductsIdPromise = (time, id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, time)

    })
}


