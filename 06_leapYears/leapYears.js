const leapYears = function(year) {

    // Leap years are years divisible by 4
    // Also year disvisble by 100 are not unlesss they can be divided by 400
    if (year%4 === 0 && year%100 !== 0) {
        return true;
    } else if (year%100 === 0 && year%400 === 0) {
        return false;
    }
    

};

// Do not edit below this line
module.exports = leapYears;
