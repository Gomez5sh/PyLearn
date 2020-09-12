/*function hasDuplicates(inputArray) {
  debugger;
  let counts = {};
  for (var i = 0; i <= inputArray.length; i++) {
    if (counts[inputArray[i]] === undefined) {
      counts[inputArray[i]] = i;
    } else {
      return true;
    }
  }
  return false;
}

const prueba = [1, 2, 3]; // false
const prueba2 = [1, 2, 3, 3, 4, 5, 6, 6]; // true
const prueba3 = ["a", "b", "c"]; //false
const prueba4 = ["a", "b", "c", "c"]; // true
const prueba5 = [1253, 1253, 1258, 4569]; // true
const prueba6 = [1345, 6789, 90]; // false
const prueba7 = [1234, 5687, 12586, 545651]; // false
const test = [3, 2, 1];

console.log(hasDuplicates(prueba));
console.log(hasDuplicates(prueba2));
console.log(hasDuplicates(prueba3));
console.log(hasDuplicates(prueba4));
console.log(hasDuplicates(prueba5));
console.log(hasDuplicates(prueba6));
console.log(hasDuplicates(prueba7))/
console.log(hasDuplicates(test));*/

function makeArrayConsecutive2(statues) {
  var sorted = statues.sort((a, b) => a - b);
  var full = sorted[sorted.length - 1] - sorted[0] + 1;
  return full - sorted.length;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));


<html></html>