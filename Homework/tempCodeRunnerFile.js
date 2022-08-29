var numArray = [140000, 104, 99];
numArray.sort(function(a, b) {
  if( a === Infinity ) 
    return 1; 
  else if( isNaN(a)) 
    return -1;
  else 
    return a - b;
});

console.log(numArray);