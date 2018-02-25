module.exports = function getLoveTrianglesCount(preferences) {
  // my implementation
  var sp1 = 0;
  var sp2 = 0;
  var sp3 = 0;
  var triangle = 0;
  for (var i=0;i<preferences.length;i++) {
  	sp1 = i+1;
  	sp2 = preferences[i];
  	sp3 = preferences[sp2-1];
 		if (preferences[sp3-1] == sp1 && sp1 != sp2 && sp2 != sp3) {
  			triangle += 1;
  			}
  		}
  return triangle/3;
}