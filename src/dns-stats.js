const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  for (let i = 0; i < domains.length; i++) {
    let arr = domains[i].split(".");
    let arrReverse = arr.reverse();
    let newArr = [];
    for (let y = 0; y < arrReverse.length; y++) {
      if (arrReverse[y - 1] !== undefined) {
        newArr.push(`${newArr[newArr.length - 1]}.${arrReverse[y]}`);
      } else {
        newArr.push(`.${arrReverse[y]}`);
      }
    }
    for (let x = 0; x < newArr.length; x++) {
      if (obj[newArr[x]] !== undefined) {
        obj[newArr[x]]++;
      } else {
        obj[newArr[x]] = 1;
      }
    }
  }
  return obj;
}

module.exports = {
  getDNSStats
};
