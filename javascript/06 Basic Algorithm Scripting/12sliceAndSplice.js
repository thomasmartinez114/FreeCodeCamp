function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  var copyArr1 = arr1.slice(0);
  var copyArr2 = arr2.slice(0);
  console.log("Arr1: " + copyArr1);
  console.log("Arr2: " + copyArr2);

  for (var i = 0; i < copyArr1.length; i++) {
    copyArr2.splice(n, 0, copyArr1[i]);
    n++; // increment index position to place the element in proper index
  }
  console.log(copyArr2);
  return copyArr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);