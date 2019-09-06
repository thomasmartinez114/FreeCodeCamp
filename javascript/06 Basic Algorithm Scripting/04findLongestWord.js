function findLongestWordLength(str) {
  var splitWords = str.split(' ');
  var count = 0;

  for (var i = 0; i < splitWords.length; i++) {
    if (splitWords[i].length > count) {
      count = splitWords[i].length;
    }
  }
  return count;
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');
