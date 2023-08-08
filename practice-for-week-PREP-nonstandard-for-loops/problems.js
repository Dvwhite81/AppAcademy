function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    let oddArr = [];
    for (let i = 1; i < arr.length; i += 2) {
        oddArr.push(arr[i]);
    }
    return oddArr;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    let oddRev = [];
    let i;
    if (arr.length % 2 === 0) {
        i = arr.length - 1;
    }
    else {
        i = arr.length - 2;
    }
    for (i = i; i >= 0; i -= 2) {
        oddRev.push(arr[i])
    }
    return oddRev;
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    let secArr = [];
    for (let i = 1; i < arr.length; i *= 2) {
        secArr.push(arr[i]);
    }
    return secArr;
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    let nthArr = [];
    for (let i = 1; i < arr.length; i *= n) {
        nthArr.push(arr[i]);
    }
    return nthArr;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    let first = [];
    for (let i = 0; i < arr.length / 2; i++) {
        first.push(arr[i])
    }
    return first;
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    let second = [];
    for (let i = Math.ceil(arr.length / 2); i < arr.length; i++) {
        second.push(arr[i])
    }
    return second;
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
