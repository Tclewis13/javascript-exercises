const palindromes = function (inputString) {
    let normalString = inputString;
    normalString = removePunctuation(normalString);
    normalString = removeSpaces(normalString);
    let reversedString = reverseString(normalString);
    normalString = normalString.toLowerCase();
    reversedString = reversedString.toLowerCase();
    if (normalString === reversedString){
        console.log(normalString);
        console.log(reversedString);
        return true;
    }
    else{
        console.log(normalString);
        console.log(reversedString);
        return false;
    }
};

function reverseString(inputString) {
    let stringArray = inputString.split("");

    stringArray = stringArray.reverse();

    stringArray = stringArray.join("");

    return stringArray;
};

function removePunctuation(str) {
    str = str.replace(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/g,"")
    return str;
}

function removeSpaces(str){
    str = str.replace(/\s+/g, '');
    return str;
}

// Do not edit below this line
module.exports = palindromes;
