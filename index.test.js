const multiply = require("./index")
const generateRandoms = require("./index")
const typeChecking = require("./typeChecking")
const fetchingExample = require("./fetching.js")

test("multiplying with 2", () => {
    expect(multiply(2, 10)).toBe(20)
})

test("multiplying with 0", () => {
    expect(multiply(2, 0)).toBe("you can't multiply by 0")
})

test("multiplying with -2", () => {
    expect(multiply(2, -10)).toBe(-20)
})

test("generate random from 1 to n with 5 length", () => {
    const temp = generateRandoms(1, 5, 5)
    console.log(temp)
    expect(generateRandoms(1, 5, 5)).toBe(5)
})

test("test boolean", () => {
    const random = 2;
    expect(random > 5).toBeFalsy()
})

test("expect an object to be", () => {
    const kelas1 = { "cika": 2 }
    kelas1["budi"] = 3
    expect(kelas1).toEqual({ "cika": 2, "budi": 3 })
})

test("expect an array to be something", () => {
    const nilais = [1, 2, 3, 4, 5]
    function getTheOdd(numArray) {
        const newArray = numArray.filter(num => num % 2 !== 0)
        return newArray
    }
    expect(getTheOdd(nilais)).toEqual([1, 3, 5])
})

test("expect an array to equal for certain member", () => {
    const nilais = []
    function addingToAnArray(newMember, operation) {
        if (operation == "add") {
            nilais.push(newMember)
        }
        else if (operation == "replace") {
            nilais.splice(nilais.length - 1, 1, newMember)
        }
        else if (operation == "remove") {
            nilais.splice(nilais.length - 1, 1)
        }
        else {
            throw new Error("error no operation received")
        }
        return nilais
    }
    expect(addingToAnArray("first", "add")).toEqual(["first"])
    expect(addingToAnArray("second", "replace")).toEqual(["second"])
})

test("expect a value to be false", () => {
    let n = undefined
    const k = null
    expect(n).toBeFalsy()
    expect(k === null).toBeTruthy()
})

test("the funtion calling should be turn to be an error", () => {
    expect(() => nonCreatedFunc()).toThrow()
})

function calculate(num1, num2, operator) {
    if (typeof num1 !== "number" || typeof num2 !== "number", typeof operator !== "string") {
        throw new Error("should input a number")
    }
    else if (operator === "/" && num1 === 0 || num2 === 0) {
        throw new Error("should not divide by 0")
    }
    else if (operator === "+") {
        return num1 + num2
    }
    else if (operator === "-") {
        return num1 - num2
    }
    else if (operator === "*") {
        return num1 * num2
    }
    else if (operator === "/") {
        return num1 / num2
    }
    else {
        throw new Error("should input a valid operator")
    }
}

test("testing calculator function ", () => {
    expect(calculate(1, 2, "+")).toBe(3)
    expect(calculate(1, 2, "-")).toBe(-1)
    expect(calculate(1, 2, "*")).toBe(2)
    expect(calculate(1, 2, "/")).toBe(0.5)
    expect(() => calculate(1, 0, "/")).toThrow()
    expect(() => calculate(1, 0, "/")).toThrow()
})

test("testing fetchingExample function to be return object", async () => {
    const response = await fetchingExample()
    expect(response != null && response != {}).toBeTruthy()
})