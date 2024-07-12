function calculateDiagonalDifference(matrix) {
    if (!matrix.every(row => row.length === matrix.length)) {
        throw new Error('Matrix must be square');
    }

    let primarySum = 0;
    let secondarySum = 0;

    for (let i = 0; i < matrix.length; i++) {
        primarySum += matrix[i][i];
    }

    for (let i = 0; i < matrix.length; i++) {
        secondarySum += matrix[i][matrix.length - 1 - i];
    }

    return primarySum - secondarySum;
}

const matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]];
const difference = calculateDiagonalDifference(matrix);
console.log("Diagonal difference:", difference);
