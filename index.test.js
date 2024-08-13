
const multiply = require('./index');

test("multiplying with normal number", () => {
    expect(multiply(2, 4)).toBe(8);
})
test("multiplying with negative number", () => {
    expect(multiply(2, -4)).toBe(-8)
})
test("multiplying with zero", () => {
    expect(multiply(3, 0)).toBe("you can't multiply by 0")
})
