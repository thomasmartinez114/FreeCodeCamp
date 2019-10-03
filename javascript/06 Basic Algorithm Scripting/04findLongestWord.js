function findLongestWordLength(str) {
  var letters = 0;
  var words = str.split(' '); // get the words separately
  console.log(`Total amount of words: ${words.length}`); // print count of words
  console.log(`Words in the string: ${words}`); // log the words of str

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > letters) {
      letters = words[i].length;
      // console.log(words[i].length);
    }
  }
  console.log(`Longest word has ${letters} letters in it.`);
  return letters;
}

console.log(
  findLongestWordLength('The quick brown fox jumped over the lazy dog')
);
