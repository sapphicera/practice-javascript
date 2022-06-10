// Write a function that takes in an array of words and returns the number of times the letter “a” appeared in total.

function numberOfA(arr) {
  var string = arr.join("");
  var total = 0;

  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i).toLowerCase() === "a") {
      total++;
    }
  }
  console.log(total);
}

numberOfA(["a", "b", "c", "AaAaA"]);