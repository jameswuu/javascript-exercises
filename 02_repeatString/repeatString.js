const repeatString = function (word, num) {
    if (num < 0) {
        return "ERROR";
    }
    let answer = '';
    for (let i = 0; i < num; i++){
        answer += word;
    }
    return answer;
};

// Do not edit below this line
module.exports = repeatString;
