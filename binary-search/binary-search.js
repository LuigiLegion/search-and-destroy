'use strict';

// Complete this algo
// const binarySearch = (array, target) => {
//   if (!array.length) {
//     return false;
//   }
//   if (array.length === 1) {
//     return array[0] === target;
//   }
//   const midPoint = Math.floor(array.length / 2);
//   if (array[midPoint] === target) {
//     return true;
//   }
//   if (array[midPoint] < target) {
//     return binarySearch(array.slice(midPoint + 1), target);
//   } else {
//     return binarySearch(array.slice(0, midPoint), target);
//   }
// };

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

const binarySearch = (array, target) => {
  let curHalf = array;
  while (curHalf.length) {
    if (curHalf.length === 1) {
      return curHalf[0] === target;
    }
    const midPoint = Math.floor(curHalf.length / 2);
    if (curHalf[midPoint] === target) {
      return true;
    }
    let newHalf = [];
    if (curHalf[midPoint] < target) {
      for (let i = midPoint + 1; i < curHalf.length; i++) {
        newHalf.push(curHalf[i]);
      }
    } else {
      for (let i = 0; i < midPoint; i++) {
        newHalf.push(curHalf[i]);
      }
    }
    curHalf = newHalf;
  }
  return false;
};

module.exports = binarySearch;
