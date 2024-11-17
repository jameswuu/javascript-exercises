const fibonacci = function(num) {
    
    if (parseInt(num) >= 0) {
        // Initialize the beginning of the function
        let array = [0,1];

        // Find the fibonacci for the current num
        for (let i = 1; i < (num + 1); i++) {
            let num1 = array[i-1]; // The first number 
            let num2 = array[i]; // The second number

            let currentNumber = num1 + num2; // number to the array
            array.push(currentNumber);
        }

        // Return the answer
        return(array[num]);
    } else {
        return("OOPS");
    }

};

// Do not edit below this line
module.exports = fibonacci;
