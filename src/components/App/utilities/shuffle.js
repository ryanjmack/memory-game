
/***********************************************************************
* File that contains utility functions for the Board component
***********************************************************************/

// generates a random integer from min - max inclusive
const randomIntGenerator = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


/***********************************************************************
* Pure function that takes a symmetrical 2D array as an argument and
* returns a new 2D array that is shuffled using the Fisher Yates Shuffle
* https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
*
* I thought of my previous implementation of the fisher yates shuffle
* and I wasn't sure of the correctness of my algorithm due to the
* the input being a 2d array. There isn't much data on the internet about
* shuffling 2d arrays and I wasn't sure about choosing a random row/col
*
* The array is symmetrical so on each iteration the row/col is calculated
* from i, which counts down from the number of total elements. A random
* integer in the range 0 <= j <= i, is generated and the appropriate
* row and column is calculated from j.
*
* This approach is pretty much identical to the fisher-yates algorithm
* for a one dimensional array
***********************************************************************/
export default function shuffle(oldArr) {
  const arr = oldArr.slice();
  const elementsPerRow = arr.length;
  const totalElements  = Math.pow(arr.length, 2);

  for (let i = totalElements - 1; i > 0; i--) {

    // calculate the position of the current element
    const currRow = Math.floor(i / elementsPerRow);
    const currCol = i % elementsPerRow;

    // 0 <= j <= i
    const j =  randomIntGenerator(0, i);

    // calculate the position of a random element
    const randRow = Math.floor(j / elementsPerRow);
    const randCol = j % elementsPerRow;

    // swap the current element with a random index
    [arr[currRow][currCol], arr[randRow][randCol]] = [arr[randRow][randCol], arr[currRow][currCol]];
  }
  return arr;
}
