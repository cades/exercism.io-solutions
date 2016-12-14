function Hamming() {
  this.compute = function(x, y) {
    if (x.length !== y.length)
      throw new Error('DNA strands must be of equal length.')

    if (x === y)
      return 0

    var distance = 0
    for (var i = 0; i < x.length; i++) {
      if (x[i] !== y[i]) distance++
    }
    return distance
  }
}

module.exports = Hamming;
