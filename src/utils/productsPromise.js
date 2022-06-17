import { products } from '../utils/products';


export const productsPromise = (time, task) => {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(task);
        }, time)
    })

}

export const getProductsPromise = (time, id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, time)

    })
}

