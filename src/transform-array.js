const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const copy = arr.slice();
  for (let i = 0; i < copy.length; i++) {
    if (copy[i] === "--double-prev" && copy[i - 1] !== undefined) {
      copy[i] = copy[i - 1];
    }
    if (copy[i] === "--double-next" && copy[i + 1] !== undefined) {
      copy[i] = copy[i + 1];
    }
    if (copy[i] === "--double-next" && i === copy.length - 1) {
      copy.pop();
    }
    if (copy[i] === "--discard-prev" && i !== 0) {
      copy.splice(i - 1, 2);
    }
    if (copy[i] === "--discard-next" && i === copy.length - 1) {
      copy.pop();
    }
    if (copy[i] === "--discard-next" && copy[i + 1] !== undefined) {
      copy.splice(i, 2);
    }
  }
  if (copy.includes("--double-prev")) {
    let x = copy.indexOf("--double-prev");
    copy.splice(x, 1);
  }
  if (copy.includes("--discard-prev")) {
    let x = copy.indexOf("--discard-prev");
    copy.splice(x, 1);
  }
  return copy;
}

module.exports = {
  transform,
};
