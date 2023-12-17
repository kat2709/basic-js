const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let y = 0; y < matrix[i].length; y++) {
      if (matrix[i][y] === true) {
        matrix[i][y] = "mine";
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let y = 0; y < matrix[i].length; y++) {
      let count = 0;
      if (matrix[i][y] !== "mine") {
        if (matrix[i - 1] !== undefined) {
          if (matrix[i - 1][y] === "mine") {
            count++;
          }
        }

        if (matrix[i + 1] !== undefined) {
          if (matrix[i + 1][y] === "mine") {
            count++;
          }
        }
        if (matrix[y - 1] !== undefined) {
          if (matrix[i][y - 1] === "mine") {
            count++;
          }
        }
        if (matrix[y + 1] !== undefined) {
          if (matrix[i][y + 1] === "mine") {
            count++;
          }
        }
        if (matrix[y - 1] !== undefined && matrix[i - 1] !== undefined) {
          if (matrix[i - 1][y - 1] === "mine") {
            count++;
          }
        }
        if (matrix[y - 1] !== undefined && matrix[i + 1] !== undefined) {
          if (matrix[i + 1][y - 1] === "mine") {
            count++;
          }
        }
        if (matrix[y + 1] !== undefined && matrix[i + 1] !== undefined) {
          if (matrix[i + 1][y + 1] === "mine") {
            count++;
          }
        }
        if (matrix[y + 1] !== undefined && matrix[i - 1] !== undefined) {
          if (matrix[i - 1][y + 1] === "mine") {
            count++;
          }
        }
        matrix[i][y] = count;
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let y = 0; y < matrix[i].length; y++) {
      if (matrix[i][y] === "mine") {
        matrix[i][y] = 1;
      }
    }
  }
  return matrix;
}

module.exports = {
  minesweeper,
};
