const returnEmptyString = function () {
    return ''
};

const returnZeroNumber = function () {
    return 0
};

const returnEmptyArray = function () {
    return []
};

const returnEmptyObject = function () {
    return {}
};

const returnAbcString = function (str) {
    return str
};

const returnSumOfTen = function (num1, num2) {
    return num1 + num2
};

const subtraction = function (num1, num2) {
    return num1 - num2
};

const multiplication = function (num1, num2) {
    return num1 * num2
};

const division = function (num1, num2) {
    return num1 / num2
};

const returnArray = function (arr) {
    return arr
};

const returnFirstIndex = function (arr) {
    return arr[0]
};

const returnSecondIndex = function (arr) {
    return arr[1]
};

const returnArrayLength = function (arr) {
    return arr.length
};

const arraySum = function (arr) {
    let result = 0
    for(let elem of arr){
        result += elem
    }
    return result
};

const arraySubtraction = function (arr) {
    let result = 0
    for(let elem of arr){
        result -= elem
    }
    return result
};

const multiplicationArray = function (arr) {
    let result = 1
    for(let elem of arr){
        result *= elem
    }
    return result
};

const divisionArray = function (arr) {
    let result = 1
    for(let elem of arr){
        result /= elem
    }
    return Number(parseFloat(result).toFixed(3))
};

const oddArray = function (arr) {
    let result = []
    for(let elem of arr){
        if(elem % 2 === 1){
            result.push(elem)
        }
    }
    return result
};

const evenArray = function (arr) {
    let result = []
    for(let elem of arr){
        if(elem % 2 === 0){
            result.push(elem)
        }
    }
    return result
};

module.exports = {
returnEmptyString,
returnZeroNumber,
returnEmptyArray,
returnEmptyObject,
returnAbcString,
returnSumOfTen,
subtraction,
multiplication,
division,
returnArray,
returnFirstIndex,
returnSecondIndex,
returnArrayLength,
arraySum,
arraySubtraction,
multiplicationArray,
divisionArray,
oddArray,
evenArray
}
