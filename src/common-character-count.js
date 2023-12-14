const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const obj1 = {};
  for (let i = 0; i < s1.length; i++) {
    if (obj1[s1[i]] !== undefined) {
      obj1[s1[i]]++;
    } else {
      obj1[s1[i]] = 1;
    }
  }

  const obj2={};
  for(let i = 0; i < s2.length; i++){
    if (obj2[s2[i]] !== undefined) {
      obj2[s2[i]]++;
    } else {
      obj2[s2[i]] = 1;
    }
  }

  let res=0;
  for (let key1 in obj1){
    for(let key2 in obj2){
      if(key1 === key2){
        res+=Math.min(obj1[key1], obj2[key2])
      }
    }
  }
  return res;
}

module.exports = {
  getCommonCharacterCount
};
