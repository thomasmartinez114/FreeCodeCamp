function reverseString(str) {
  var split = str
    .split('')
    .reverse()
    .join('');
  return split;
}

console.log(reverseString('hello'));
