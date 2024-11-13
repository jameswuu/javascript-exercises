const reverseString = function(strings) {
    let len = strings.length;
    let reverse_string ='';
    for (let i = len - 1; i>=0 ; i--) {
        reverse_string += strings[i];
    }
    return reverse_string;

    // Alternative Solution:
    // return strings.split("").reverse().join("")
};

// Do not edit below this line
module.exports = reverseString;
