// Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
// The lowest number will not always come first.
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function sumAll(arr) {
  var countMax = Math.max(arr[0], arr[1]);
  var countMin = Math.min(arr[0], arr[1]);
  var count = 0;

  for (var i = countMin; i <= countMax; i++){
    count += i;
  }

  return(count);
}

sumAll([1, 4]);