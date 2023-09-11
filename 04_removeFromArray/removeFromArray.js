const removeFromArray = function(inputArray, ...removedValues) {
    removedValues.forEach((removeItem) => {
        let removeIndex = inputArray.indexOf(removeItem);
        /*indexOf returns a -1 if the value is not found*/
        if (removeIndex > -1){
            inputArray.splice(removeIndex,1);
        }
    })
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
