
function multiply(a, b) {
    if (a === 0 || b === 0) return "you can't multiply by 0";
    return a * b;
}

function generateRandoms(min, max, length) {
    const randoms = [];
    for (let i = length; i > 0; i++) {
        randoms.push(Math.floor(Math.random() * (max - min) + min))
    }
    return randoms
}




module.exports = multiply