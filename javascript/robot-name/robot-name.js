function Robot() {
  this.name = getUniqueName()
  this.reset = function() {
    this.name = getUniqueName()
  }
}

var registry = {}

function getUniqueName() {
  var name = randomAlphabetic() + randomAlphabetic() +
        randomDigit() + randomDigit() + randomDigit()
  if (registry[name])
    return getUniqueName()
  registry[name] = true
  return name
}

function randomAlphabetic() {
  return String.fromCharCode('A'.codePointAt(0) + getRandomInt(0, 26))
}

function randomDigit() {
  return String.fromCharCode('0'.codePointAt(0) + getRandomInt(0, 10))
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = Robot;
