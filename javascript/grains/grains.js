var BigInt = require('./big-integer')

function Grain() {
  this.square = function(x) {
    return BigInt(2).pow(x-1).toString()
  }
  this.total = function() {
    var sum = BigInt(0)
    for (var i = 1; i <=64; i++)
      sum = sum.add(this.square(i))
    return sum.toString()
  }
}

module.exports = Grain;
