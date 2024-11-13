const removeFromArray = function(array, word) {
    let new_array = [];
    for (let i = 0; i < length(num); i++) {
        if (word != array[i]) {
            new_array.push(array(i));
        }
    }
    return new_array;
};

// Do not edit below this line
module.exports = removeFromArray;
