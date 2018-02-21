/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
   var l=preferences.length;
    var t=0;
    var Ar=new Array();
    for (i=0; i<l; i++){
      if (Ar.indexOf( i ) != -1 ){
        continue;
      }
      j=preferences[i]-1;

      if (Ar.indexOf( j ) != -1 ){
        continue;
      }
  	if ( i==j ){
  		Ar.push(i);
  		continue;
  	}
      k=preferences[j]-1;
      if (Ar.indexOf( k ) != -1 ){
        continue;
      }
  	if ( j==k ){
  		Ar.push(j);
  		continue;
  	}
  	if ( k==i ){
  		Ar.push(j);
  		Ar.push(i);
  		continue;
  	}
      n=preferences[k]-1;
  	if ( k==n ){
  		Ar.push(k);
  		continue;
  	}
  	if ( j==n ){
  		Ar.push(j);
  		Ar.push(k);
  		continue;
  	}
      if (i=n){
        t++;
        Ar.push(i);
        Ar.push(j);
        Ar.push(k);
      }
    }
    return t;
};
