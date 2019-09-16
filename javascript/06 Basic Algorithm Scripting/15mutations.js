function mutation(arr) {
  var testWord = arr[1].toLowerCase();
  var ogWord = arr[0].toLowerCase();

  for (var i = 0; i < testWord.length; i++) {
    if (ogWord.indexOf(testWord[i]) < 0) return false;
  }
  return true;
}

console.log(mutation(['hello', 'hey']));

// use current.indexOf(elem[i]) == to other element
