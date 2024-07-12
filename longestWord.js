function longestWord(sentence) {
    const words = sentence.split(' ');

    let longestWord = '';
    let longestLength = 0;

    for (const word of words) {
        const wordLength = word.length;

        if (wordLength > longestLength) {
            longestWord = word;
            longestLength = wordLength;
        }
    }

    return longestWord;
}

// Example usage
const sentence = "Saya sangat senang mengerjakan soal algoritma";
const longest = longestWord(sentence);
console.log("Longest word:", longest);
