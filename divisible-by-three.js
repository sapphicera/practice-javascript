// Write a method that prints out the numbers 1 to 1000 that are divisible by 3.

function printNumbersDivisibleByThree() {
  var index = 1;
  while (index <= 1000) {
    if (index % 3 === 0) {
      console.log(index);
    }
    index += 1;
  }
}
printNumbersDivisibleByThree();