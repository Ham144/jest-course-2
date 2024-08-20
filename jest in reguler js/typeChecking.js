

function typeChecking(num, str) {
    if (!num || !str) {
        throw new Error("Error with input type - should be number and string for the 1st and 2nd arguments")
    }
    else if (typeof num === "string") {
        throw new Error("Error with input type - should be number for the 1st argument")
    }
    else if (typeof str === "number") {
        throw new Error("Error with input type - should be string for the 2nd argument")
    }
    else {
        return "ok"
    }
}

module.exports = typeChecking