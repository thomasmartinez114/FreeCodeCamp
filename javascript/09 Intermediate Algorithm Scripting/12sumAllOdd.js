// Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers

// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers.The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10)should return 10because all odd Fibonacci numbers less than or equal to 10are 1, 1, 3, and 5.

// Remember to use Read - Search - Ask if you get stuck.Try to pair program.Write your own code.

function sumFibs(num) {
  let arr = [1, 1, 2, 3, 5, 8];
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum = arr[i - 1] + arr[i - 2];
    console.log(sum);
  }
  console.log(sum);
}

sumFibs(4);
