// Add Items Using splice()

function htmlColorNames(arr) {
  // change code below this line
 // 0 removes at that index, 2 removes two elements, then add
  arr.splice(0,2,'DarkSalmon', 'BlanchedAlmond')
  // change code above this line
  return arr;
} 
 
// do not change code below this line
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));