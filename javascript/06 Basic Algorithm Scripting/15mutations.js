function mutation(arr) {
  var testWord = arr[1].toLowerCase();
  var ogWord = arr[0].toLowerCase();

  for (var i = 0; i < testWord.length; i++) {
    if (ogWord.indexOf(testWord[i]) < 0) return false;
  }
  return true;
}

console.log(mutation(['hello', 'hey']));

// The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex.Returns - 1 if the value is not found.
