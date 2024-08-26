const reverseString = function(inputString) {
    let stringArray = inputString.split("");

    stringArray = stringArray.reverse();

    stringArray = stringArray.join("");

    return stringArray;
};

// Do not edit below this line
module.exports = reverseString;
