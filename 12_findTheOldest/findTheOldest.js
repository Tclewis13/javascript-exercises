const findTheOldest = function(inputArray) {

    const oldest = inputArray.reduce((workingOldest, currentItem) => {
        let currentAge;
        let workingAge;
        if (workingOldest.yearOfDeath === undefined){
            let today = new Date();
            today = today.getFullYear();
            workingAge = today - workingOldest.yearOfBirth;
            //console.log(workingOldest.name);
            //console.log(workingAge);
        }
        else{
            workingAge = workingOldest.yearOfDeath - workingOldest.yearOfBirth;
        }
        if (currentItem.yearOfDeath === undefined){
            let today = new Date();
            today = today.getFullYear();
            currentAge = today - currentItem.yearOfBirth;
            //console.log(currentItem.name);
            //console.log(currentAge);
        }
        else{
            currentAge = currentItem.yearOfDeath - currentItem.yearOfBirth;
        }
        if(currentAge > workingAge){
            return currentItem;
        }
        else{
            return workingOldest;
        }
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
