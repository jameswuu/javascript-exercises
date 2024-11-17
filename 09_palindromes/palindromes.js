const palindromes = function (string) {
    // Since we only consider letters and numbers, create a variable containing all valid characters
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    // Convert to lowercase, split to array of individual characters, filter only valid characters, then rejoin as new string
    const cleanedString = string
        .toLowerCase()
        .split('')
        .filter((character) => alphanumerical.includes(character))
        .join('');

    // Reverse the filterered_array
    let reverse_filtered_array = cleanedString.split('').reverse().join('');

    // Assume palindromes is true
    let Ispalindromes = true;

    // Check if the reversed and the original one are identical
    if (reverse_filtered_array !== cleanedString){
        Ispalindromes = false;
    }

    return Ispalindromes;
};

// Do not edit below this line
module.exports = palindromes;
