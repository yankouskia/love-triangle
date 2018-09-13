/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let totalCount = 0;
  preferences.forEach((value, index, array) => totalCount += ((index + 1) === array[array[value - 1] - 1]) ? 1 : 0);
  return Math.floor(totalCount / 3);
};
