function reverseAlphabetWithNumber(str) {
    const letters = str.slice(0, -1).split('');
    const number = str.slice(-1);

    const reversedLetters = letters.reverse();

    const reversedStr = reversedLetters.join('') + number;

    return reversedStr;
}

const inputStr = "NEGIE1";
const reversedStr = reverseAlphabetWithNumber(inputStr);
console.log("Original string:", inputStr);
console.log("Reversed string:", reversedStr);
