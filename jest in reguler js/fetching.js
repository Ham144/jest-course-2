
const fetchingExample = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: "ham", age: 22 })
        }, 1000)
    })
}

module.exports = fetchingExample