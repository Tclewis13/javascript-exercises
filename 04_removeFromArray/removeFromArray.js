const removeFromArray = function(...args) {
    let inputArray = args[0]
    args.shift();
    let workingArray = [...inputArray];
    let elementRemoved = true;
    for (let i = 0; i < args.length; i++){
        while ( elementRemoved === true){
            elementRemoved = false;
            let workingLength = workingArray.length;
            workingArray = removeElement(workingArray, args[i]);
            if(workingLength > workingArray.length){
                elementRemoved = true;
            }
        }
        elementRemoved = true;
        
    }
    return workingArray;


    function removeElement(inputArray, removal){
        let returnArray = [...inputArray];
        console.log('Looking for ' + removal);
        returnArray.forEach(element => {
            if(element === removal){
                returnArray.splice(inputArray.indexOf(element),1);
            }
        });

        return returnArray;
    }
   
};

// Do not edit below this line
module.exports = removeFromArray;
