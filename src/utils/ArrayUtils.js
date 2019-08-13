/**
 * Use the Fisher-Yates algorithm to reorder the elements of an array and return a new array.
 * @param {[]} arr The array to reorder.
 * @returns {[]} The reordered array.
 *
 * @example
 * const arr = [1, 2, 3];
 * shuffle(arr); //=> [3, 1, 2]
 */
const shuffle = ([...arr]) => {
  let size = arr.length;

  while (size) {
    const idx = Math.floor(Math.random() * size--);
    [arr[size], arr[idx]] = [arr[idx], arr[size]];
  }

  return arr;
};

module.exports = {
  shuffle
};
