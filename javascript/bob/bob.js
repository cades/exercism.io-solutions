//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

function containsLetter(str) {
  return str.match(/[a-z]/i)
}

function isAllUpper(str) {
  return str.split('').map((c) => c === c.toUpperCase())
    .reduce(function(x, res){ return x && res}, true)
}

function isEmpty(str) {
  return str.match(/^[\s]*$/)
}

Bob.prototype.hey = function(input) {
  if (containsLetter(input) && isAllUpper(input))
    return 'Whoa, chill out!'
  if (input.endsWith('?'))
    return 'Sure.'
  if (isEmpty(input))
    return 'Fine. Be that way!'
  return 'Whatever.'
};

module.exports = Bob;
