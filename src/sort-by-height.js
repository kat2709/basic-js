const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let newArr = [];
  let sortArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      newArr.push(String(arr[i]).replace(arr[i], 0));
      sortArr.push(arr[i]);
    } else {
      newArr.push(arr[i]);
    }
  }
  sortArr.sort((a,b)=> b-a);
  for(let i=0; i<newArr.length; i++){
    if(newArr[i]!==-1){
      newArr[i]=sortArr.pop()
    }
  }
  return newArr;
}

module.exports = {
  sortByHeight
};
