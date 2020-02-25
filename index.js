// Your code here
function mapToNegativize(sourceArray) {
    return sourceArray.map(function(el) {return el = el * -1})
}

function mapToNoChange(sourceArray) {
    return sourceArray.map(el => el)
}

function mapToDouble(sourceArray) {
    return sourceArray.map(function(el) {return el = el * 2})
}

function mapToSquare(sourceArray) {
    return sourceArray.map(function(el) {return el = el * el})
}

function reduceToTotal(sourceArray, startingPoint=0) {
    return sourceArray.reduce(function (accumulator, currentValue)  { 
        return accumulator + currentValue
    }, startingPoint)
}

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++ ) {
        if (!sourceArray[i]) return false
    }
    return true
}

function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++ ) {
        if (!!sourceArray[i]) return true
    }
    return false
}