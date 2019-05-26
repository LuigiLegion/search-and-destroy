'use strict';

// Complete this algo
const minJumps = arr => {
  let steps = 0;
  let i = 0;
  while (i < arr.length) {
    if (arr[i] >= arr.length - 1 - i) {
      steps++;
      return steps;
    } else {
      const nextStepsIdxArr = [];
      const nextStepsValuesArr = [];
      for (let j = i + 1; j <= i + arr[i]; j++) {
        nextStepsIdxArr.push(j);
        nextStepsValuesArr.push(arr[j]);
      }
      const biggestNextStepValue = Math.max(...nextStepsValuesArr);
      const biggestNextStepValuesArrIdx = nextStepsValuesArr.lastIndexOf(
        biggestNextStepValue
      );
      const biggestNextStepIdxArrIdx =
        nextStepsIdxArr[biggestNextStepValuesArrIdx];
      i = biggestNextStepIdxArrIdx;
      steps++;
    }
  }
};

module.exports = minJumps;
