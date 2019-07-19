function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num >= 1) {
    return str.repeat(num);
  } else {
    return "";
  }
}

repeatStringNumTimes("abc", 3);
