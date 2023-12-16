const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sumFirstRow = 0;
  let sumLastRows = 0;
  for (let i = 0; i < matrix.length; i++) {
    if (i === 0) {
      matrix[0].forEach((item) => {
        sumFirstRow += item;
      });
    } else {
      for (let y = 0; y < matrix[i].length; y++) {
        if (matrix[i - 1][y] !== 0) {
          sumLastRows += matrix[i][y];
        }
      }
    }
  }
  return sumLastRows+sumFirstRow;
}

module.exports = {
  getMatrixElementsSum
};
