// Write a method that accepts an array of strings and prints out every other string.

function printEveryOtherItem(strings) {
  var index = 0;
  strings.forEach(function (string) {
    if (index % 2 === 0) {
      console.log(string);
    }
    index += 1;
  });
}
printEveryOtherItem(["a", "b", "c", "d", "e"]);