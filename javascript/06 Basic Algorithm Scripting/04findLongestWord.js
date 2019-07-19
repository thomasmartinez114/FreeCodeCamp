// Find the Longest Word in a String

function findLongestWordLength(str) {
  var splitWords = str.split(' ');
  var max = 0;

  for (var i = 0; i < splitWords.length; i++){
    if (splitWords[i].length > max){
      max = splitWords[i].length;
    }
  }
  return max;
}



findLongestWordLength("The quick brown fox jumped over the lazy dog");
findLongestWordLength("May the force be with you");
findLongestWordLength("Google do a barrel roll");
findLongestWordLength("What is the average airspeed velocity of an unladen swallow");
findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");