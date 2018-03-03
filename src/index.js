/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var sum = 0;
  for (var i = 0; length = preferences.length; i++) {
  	var con1 = preferences[preferences[preferences[i]-1]-1] === i+1;
  	var con2 =  i+1 !== preferences[i];
  	if (con1 && con2) {
  		sum++;
  	}
  }
  return sum/3
};
