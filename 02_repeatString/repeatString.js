const repeatString = function(string,num) {
    if (num >= 0) {
        let repeatedString = string.repeat(num);
        return repeatedString;
    }
    else {
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = repeatString;
