// Write a function that takes in an array of numbers and returns true if all the numbers are bigger than 10, otherwise returns false.

function greaterThanTen(arr) {
  var i = 0;
  while (arr.length > i) {
    if (arr[i] <= 10) {
      return false;
    } else {
      i++;
    }
  }
  return true;
}

console.log(greaterThanTen([11, 12, 13, 14]));