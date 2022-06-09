// Given a list of integers, determine if the product of all of the integers is even or odd.

// Return the sum of all of the integers if the product of all of the integers is even.
// Return 0 if the product of all of the integers is odd.
// Note that 0 is considered even.

// Examples:

// Input: [1,2,3,4]
// Output: 10
// Explanation: 1 * 2 * 3 * 4 = 24. This is an even number. The sum of all of the integers is 10

// Input: [5,7,9]
// Output: 0
// Explanation: 5 * 7 * 9 = 315 is odd so the function returns 0

function oddEvenProduct(myList) {
  var sum = myList.reduce((partialSum, a) => partialSum + a, 0);
  return ((sum % 2 === 0) ? sum : 0);
}