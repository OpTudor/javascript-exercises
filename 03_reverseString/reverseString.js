const reverseString = function(string) {
    const letter = string.split('').reverse();
    let newString = letter.join('');
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
