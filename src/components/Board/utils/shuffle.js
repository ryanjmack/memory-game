
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
  const n = arr.length;

  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < n - 2; j++) {
      const col = randomIntGenerator(i, n - 1);
      const row = randomIntGenerator(j, n - 1);

      [arr[i][j], arr[col][row]] = [arr[col][row], arr[i][j]];
    }
  }
  return arr;
}
