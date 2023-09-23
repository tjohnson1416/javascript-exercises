const palindromes = function (input) {
    const lowerCase = input.toLowerCase();
    const noSpaces = lowerCase.replace(/\s/g, '').replace(/[^\w\s\']|_/g, "");
    const len = noSpaces.length;
    for (let i = 0; i < (len/2); i++){
        if (noSpaces.charAt(i) !== noSpaces.charAt(len - 1 - i)) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
