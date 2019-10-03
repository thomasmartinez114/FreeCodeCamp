// Basic Algorithm Scripting: Truncate a String
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function truncateString(str, num) {
  // v1.0 below

  // var eachLetter = str.slice(0, num);
  // console.log("Word: " + eachLetter); // log out the letters by what num - 1 is
  // var newStr = eachLetter + '...';
  // console.log(`The truncated by number ${num} is now "${newStr}"`); // log what the words would be with '...' added
  // return newStr;

  // v2.0 below

  if (str.length > num) {
    return str.slice(0, num) + "...";
  }
  return str
}

truncateString('A-tisket a-tasket A green and yellow basket', 8);
truncateString("Peter Piper picked a peck of pickled peppers", 11)
//truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length
