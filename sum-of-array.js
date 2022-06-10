// Write a method that accepts an array of numbers and returns the sum.

function computeSum(numbers) {
  var sum = numbers.reduce((partialSum, a) => partialSum + a, 0);
  return sum;
}
console.log(computeSum([2, 4, 5]));

// function computeSum(numbers) {
//   var sum = 0;
//   numbers.forEach(function (number) {
//     sum += number;
//   });
//   return sum;
// }
// console.log(computeSum([2, 4, 5]));