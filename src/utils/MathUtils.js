/**
 * Returns a random integer in the specified range.
 * @param {Number} min The lower limit (inclusive).
 * @param {Number} max The upper limit (inclusive).
 * @returns {Number} The randomly generated number.
 * 
 * @example
 * randomIntegerInRange(0, 5); //=> 2
 */
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

module.exports = {
  randomIntegerInRange
};
