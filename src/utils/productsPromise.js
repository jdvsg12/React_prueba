
export const productsPromise = (time, task) => {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(task);
        }, time)
    })

}

export const productPromise = (time, task) => {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(task);
        }, time)
    })

}