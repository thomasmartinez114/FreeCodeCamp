function sumAll(arr) {
arr.sort(function(a, b){ return a -b })

// Find the numbers in between the two numbers in the arr
console.log(arr)

var result = 0;
for(var i = arr[0]; i <= arr[1]; i++){

  result += i
}

return result

// Add all of the numbers together including the two numbers in arr
}

sumAll([1, 4])