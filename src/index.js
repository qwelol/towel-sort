module.exports = function towelSort(matrix) {
    let result = [];
    if (matrix && matrix.length) {
        for (let i = 0; i < matrix.length; i++) {
            const element = i % 2 == 0 ? matrix[i] : matrix[i].reverse();
            result = result.concat(element);
        }
    }
    return result;
};
