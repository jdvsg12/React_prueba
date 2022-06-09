const personFetch = (time, task) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(task);
        }, time)
    })

}

export default personFetch