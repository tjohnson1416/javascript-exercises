const reverseString = function(stringToReverse) {
    let holdingArray = stringToReverse.split('');
    holdingArray = holdingArray.reverse();
    let reverseString = '';
    for (let members in holdingArray) {
        reverseString += holdingArray[members];
    }
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
