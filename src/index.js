/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
var count =0;
// a+1, b+1, c+1 -порядковый номер мурзилки
for (var a =0; a < preferences.length; a++) {
  for (var b =0; b < preferences.length; b++) {
   if (b != a && b+1 === preferences[a]) {
    for (var c =0; c < preferences.length; c++) {
     if (c !=a && c !=b && c+1 ===preferences[b] && a+1 ===preferences[c]) {
      count ++;
     };
    };
   };
  };
};
count = count/3;
return count;
};
