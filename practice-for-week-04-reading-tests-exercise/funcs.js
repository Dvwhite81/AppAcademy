function isFive(num) {
    return num === 5;
}

function isOdd(number) {
    if (isNaN(number)) throw new Error;
    else {
        return number % 2 !== 0;
    }
}

function myRange(min, max, step = 1) {
    let results = [];
    for (let i = min; i <= max; i += step) {
        results.push(i);
    }
    return results;
}

module.exports = { isFive, isOdd, myRange };