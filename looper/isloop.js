'use strict';

//Complete this algo
// const isLoop = linkedlist => {
//   const arr = [];
//   let curNode = linkedlist.head;
//   while (curNode.next) {
//     if (!arr.includes(curNode)) {
//       arr.push(curNode);
//       curNode = curNode.next;
//     } else {
//       return true;
//     }
//   }
//   return false;
// };

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/

const isLoop = linkedlist => {
  const arr = [];
  let curNode = linkedlist.head;
  while (curNode.next) {
    if (!arr.includes(curNode)) {
      arr.push(curNode);
      curNode = curNode.next;
    } else {
      return curNode.value;
    }
  }
  return false;
};

module.exports = isLoop;
