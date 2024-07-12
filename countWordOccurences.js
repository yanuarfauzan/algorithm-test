function countWordOccurrences(input, query) {
    const wordCounts = {};

    for (const word of input) {
        if (word in wordCounts) {
            wordCounts[word]++;
        } else {
            wordCounts[word] = 1;
        }
    }

    const output = [];

    for (const word of query) {
        if (word in wordCounts) {
            const count = wordCounts[word];
            output.push(count);
        } else {
            output.push(0);
        }
    }

    return output;
}

const input = ['xc', 'dz', 'bbb', 'dz'];
const query = ['bbb', 'ac', 'dz'];
const output = countWordOccurrences(input, query);
console.log("Output:", output);
