function getBiggerNum(num1, num2) {
    let bigNum;
    if (num1 > num2) {
        bigNum = num1;
    } else {
        bigNum = num2;
    }
    return bigNum;
}

function multiplyBiggerNumByTwo(num1, num2) {
    return getBiggerNum(num1, num2) * 2;
}

function divideBiggerNumByThree(num1, num2) {
    return getBiggerNum(num1, num2) / 3;
}

function eatMostTacos(sum1, sum2) {
    return `I ate ${getBiggerNum(sum1, sum2)} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
    let smallDog;
    if (getBiggerNum(weight1, weight2) === weight1) {
        smallDog = weight2;
    } else {
        smallDog = weight1;
    }
    return `I adopted a dog that weighs ${smallDog} pounds.`;
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
    multiplyBiggerNumByTwo,
    divideBiggerNumByThree,
    eatMostTacos,
    adoptSmallerDog
};