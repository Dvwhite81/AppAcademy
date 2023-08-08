function isFive(num) {
    if (num === 5) return true;
    else return false;
}

function isOdd(number) {
    if (number % 2 === 0) return false;
    else if (number % 1 === 0) return true;
    else throw new Error();
}

function myRange(min, max, step = 1) {
    let array = [];
    for (let i = min; i <= max; i += step) {
        array.push(i);
    }
    return array;
}


module.exports = { isFive, isOdd, myRange };