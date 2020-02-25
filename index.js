function mapToNegativize(sourceArray){
    let newArray = []
    sourceArray.forEach(
        function(num){
            num*=-1; 
            newArray.push(num); 
        }
    ); 
    return newArray;
}
function mapToNoChange(sourceArray){
    return sourceArray;
}
function mapToDouble(sourceArray){
    let newArray = []; 
    sourceArray.forEach(
        function(num){
            num *=2; 
            newArray.push(num); 
        }
    )
    return newArray;
}
function mapToSquare(sourceArray){
    let newArray = []; 
    sourceArray.forEach(
        function(num){
            num *=num; 
            newArray.push(num); 
        }
    )
    return newArray;
}

function reduceToTotal(sourceArray, startingPoint){
    let total = 0;
    sourceArray.forEach(function(num){
        total+=num; 
    })
    if (startingPoint){
        return total+startingPoint;
    }else{
        return total; 
    }
    
}
function reduceToAllTrue(sourceArray){
    let toReturn = true; 
    sourceArray.forEach(function(value){
        if(!value){
            toReturn = false; 
        }
    })
    return toReturn; 
}
function reduceToAnyTrue(sourceArray){
    let toReturn = false; 
    sourceArray.forEach(function(value){
        if(value){
            toReturn = true; 
        }
    })
    return toReturn; 
}