const findTheOldest = function(people) {
    // Inialize varables
    const currentYear = new Date().getFullYear();
    let oldestPerson = null;
    let oldestAge = -1;

    // Use loop to go throught each person
    for (let person of people){
        let currentAge;

        // Calculate the current age 
        if (person.yearOfDeath) {
            // For deceased person
            currentAge = person.yearOfDeath - person.yearOfBirth
        } else {
            // For living person 
            currentAge = currentYear - person.yearOfBirth;
        }
    
        // Compare the oldest one with the current one
        if (currentAge > oldestAge) {
            oldestAge = currentAge;
            oldestPerson = person;
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
