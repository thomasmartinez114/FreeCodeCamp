// Return Largest Numbers in Arrays

// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
  // You can do this!
  let largestNumber = [];

  for (let item = 0; item < arr.length; item++) {
    // Sort the numbers in the arrays
    arr[item].sort(function (a, b) {
      return a - b;
    });

    console.log(`Print out arr: ${arr[item]}`);
    let high = arr[item].slice(-1)[0]; // Get the last element which is the highest
    console.log('sub array high: ' + high);
    // high = parseInt(high); // convert from string to int
    // console.log(high);
    largestNumber.push(high); // Push the highest to the new array
  }
  console.log("arr with largest numbers: " + largestNumber);
  // console.log(typeof largestNumber);
  return largestNumber;
}

largestOfFour([
  [4, 9, 1, 3],
  [13, 35, 18, 26],
  [32, 35, 97, 39],
  [1000000, 1001, 857, 1]
]);
