const findTheOldest = function(people) {
    // Inialize varables
    let currentYear = date();
    let oldestPerson = '';
    let oldestAge = null;

    // Use loop to go throught each person
    for (let person of people){
        let currentAge;
        if (person.yearofDeath) {
            currentAge = person.yearofDeath - yearofBirth
        } else {
            currentAge = currentYear - yearOfBirth;
        }
    
        // Compare the oldest one with the current one
        if (currentAge >= oldestAge || oldestAge != null) {
            oldestPerson = person.name;
        } else {
            oldestAge = currentAge;
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
