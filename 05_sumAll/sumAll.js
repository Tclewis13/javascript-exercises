const sumAll = function(firstNum, secondNum) {
    let smallerNum;
    let biggerNum;
    let sum = 0;

    if( firstNum < 0 || secondNum < 0){
        return 'ERROR';
    }
    if (Number.isInteger(firstNum) === false || Number.isInteger(secondNum) === false){
        return 'ERROR';
    }

    if(firstNum < secondNum){
        smallerNum = firstNum;
        biggerNum = secondNum;
    }
    else if(firstNum > secondNum){
        smallerNum = secondNum;
        biggerNum = firstNum;
    }
    else if (firstNum === secondNum){
        return firstNum;
    }

    for(i = smallerNum; i <= biggerNum; i++){
        sum+=i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
