function stringPermutaions (str) {
  var array = getPermutations(str);
  array = removeDuplicates(array);
  return array.sort();
}

function getPermutations (str) {
  var permutations = [];
  var nextword = [];
  var chars = [];

  if (typeof str === 'string') chars = str.split('');
  else if (typeof str === 'number') {
    str = str + '';
    chars = str.split('');
  }

  permutate(chars);

  return permutations;

  function permutate (chars) {
    if (chars.length === 0) permutations.push(nextword.join(''));
    for (var i = 0; i < chars; i++) {
      chars.push(chars.shift());
      nextword.push(chars[0]);
      permutate(chars.slice(1));
      nextword.pop();
    }
  }
}

removeDuplicates = (array) =>
  array.filter((item, index) => array.indexOf(item) === index);

const s = 'CBA';
console.log(stringPermutaions(s));
