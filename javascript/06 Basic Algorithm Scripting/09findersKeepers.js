
function findElement(arr, func) {
  let num = 0;
  // return num;

  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]) // log the elements
    if (arr[i] % 2 === 0) {
      console.log(`The arr[i] that passed is ${arr[i]}`);
      return arr[i];
      break;
    }
  }
  console.log("the num is: " + num);
}

findElement([1, 2, 3, 4], num => num % 2 === 0);