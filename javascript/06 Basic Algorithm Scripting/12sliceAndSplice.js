function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  var newArr = arr2.slice();

  for (var i = 0; i < arr1.length; i++) {
    newArr.splice(n, 0, arr1[i]);
    n++;
  }

  return newArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
