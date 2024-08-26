const repeatString = function(inputString, loops) {
    let returnString = '';
    if(loops < 0){
        return 'ERROR';
    }
    else{
        for(i=0; i < loops; i++){
            returnString = returnString + inputString;
        }
        return returnString;
    };
}
    

// Do not edit below this line
module.exports = repeatString;
