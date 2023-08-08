const logBetween = (lowNum, highNum, step = 1) => {
    let results = [];
    for (let i = lowNum; i <= highNum; i += step) {
        results.push(i);
    }
    return results;
}
/*
console.log(logBetween(-1, 2));  // => [-1, 0, 1, 2]
console.log(logBetween(14, 6));  // => []
console.log(logBetween(4, 6));  // => [4, 5, 6]
*/

const logBetweenStepper = (min, max, step) => {
    return logBetween(min, max, step)
}
/*
console.log(logBetweenStepper(5, 9, 1)); // => [5, 6, 7, 8, 9]
console.log(logBetweenStepper(-10, 15, 5)); // => [-10, -5, 0, 5, 10, 15]
*/

const printReverse = (min, max) => {
    let results = [];
    for (let i = max - 1; i > min; i--) {
        results.push(i);
    }
    return results;
}
/*
console.log(printReverse(13, 18)); // => [17, 16, 15, 14]
console.log(printReverse(90, 94)); // => [93, 92, 91]
*/

const fizzBuzz = max => {
    let results = [];
    for (let i = 0; i < max; i++) {
        if ((i % 3 === 0 && i % 5 !== 0) ||
            i % 3 !== 0 && i % 5 === 0) {
                results.push(i);
            }
    }
    return results;
}
/*
console.log(fizzBuzz(20)); // => [3, 5, 6, 9, 10, 12, 18]
*/

const isPrime = number => {
    if (number < 2) return false;
    for (let i = 2, j = Math.sqrt(number); i <= j; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
/*
console.log(isPrime(2));  // => true
console.log(isPrime(10));  // => false
console.log(isPrime(11));  // => true
console.log(isPrime(9));  // => false
console.log(isPrime(2017));  // => true
*/

const maxValue = array => {
    if (array.length === 0) return null;
    return Math.max(...array);
}
/*
console.log(maxValue([12, 6, 43, 2]));  // => 43
console.log(maxValue([]));  // => null
console.log(maxValue([-4, -10, 0.43]));  // => 0.43
*/

const myIndexOf = (array, target) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) return i;
    }
    return -1;
}
/*
console.log(myIndexOf([1,2,3,4],4)); // => 3
console.log(myIndexOf([5,6,7,8],2)); // => -1
*/

const factorArray = (array, number) => {
    let results = [];
    for (let i = 0; i < array.length; i++) {
        if (number % array[i] === 0) results.push(array[i]);
    }
    return results;
}
/*
console.log(factorArray([2,3,4,5,6],20)); // => [2,4,5]
console.log(factorArray([2,3,4,5,6],35)); // => [5]
console.log(factorArray([10,15,20,25],5)); // => []
