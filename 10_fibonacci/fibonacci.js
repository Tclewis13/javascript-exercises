const fibonacci = function(inputIndex) {
    firstNum = 1;
    secondNum = 1;

    if (typeof inputIndex === 'string'){
        inputIndex = parseInt(inputIndex);
    }

    if (inputIndex === 1 || inputIndex === 2){
        return 1;
    }
    else if(inputIndex === 0){
        return 0;
    }
    else if(inputIndex < 0){
        return 'OOPS';
    }
    else{
        let workingNumber = 1;
        let prevWorkingNumber = 1;
        for (let i = 3; i <= inputIndex; i++){
            workingNumber = workingNumber + prevWorkingNumber;
            prevWorkingNumber = workingNumber - prevWorkingNumber;
        }
        return workingNumber;
    }
};

// Do not edit below this line
module.exports = fibonacci;
