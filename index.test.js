const multiply = require("./index")
const generateRandoms = require("./index")
const typeChecking = require("./typeChecking")

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
