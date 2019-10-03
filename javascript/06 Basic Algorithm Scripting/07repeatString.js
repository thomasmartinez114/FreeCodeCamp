function repeatStringNumTimes(str, num) {
  var newStr = '';
  // console.log(newStr);

  for (var i = 0; i < num; i++) {
    newStr += str;
  }
  console.log('New string: ', newStr);
  return newStr;
}

repeatStringNumTimes('abc', 3);
repeatStringNumTimes('*', 3);
repeatStringNumTimes('abc', 4);
repeatStringNumTimes('*', 20);

// https://www.samanthaming.com/tidbits/22-2-ways-to-repeat-strings?source=post_page-----9a782b17fa89----------------------
