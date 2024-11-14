const sumAll = function(num1, num2) {
    
    // To Validate the input
    if ( !Number.isInteger(num1) || !Number.isInteger(num2) ){
        return "ERROR";
    } else if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    let difference = num1 - num2;
    let sum = 0;
    if (difference > 0){
        // Case 1: num1 is greater than num2
        for (let i = 1; i <= difference+1; i++){
            sum += num2;
            num2++;
        }
    } else if (difference < 0){
        // Case 2: num2 is greater than num2
        for (let i = -1; i >= difference-1; i--){
        sum += num1;
        num1++;
        } 
    } else {
        sum = num1 + num2;
        }
        return sum;
};

// Do not edit below this line
module.exports = sumAll;
