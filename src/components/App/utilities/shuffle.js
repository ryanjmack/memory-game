
/***********************************************************************
* File that contains utility functions for the Board component
***********************************************************************/

// generates a random integer from min - max inclusive
const randomIntGenerator = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


/***********************************************************************
* Pure function that takes a symmetrical 2D array as an argument and
* returns a new 2D array that is shuffled using the Fisher Yates Shuffle
* https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
***********************************************************************/
export default function shuffle(oldArr) {
  const arr = oldArr.slice();
  const n = arr.length - 1;

  // iterate over all the rows; if i > 0 then you don't get to shuffle first row properly
  for (let i = n; i >= 0; i--) {

    // but not all of the columns in each row
    for (let j = n; j > 0; j--) {
      const x = randomIntGenerator(0, i);
      const y = randomIntGenerator(0, j);

      [arr[i][j], arr[x][y]] = [arr[x][y], arr[i][j]];
    }
  }
  return arr;
}
