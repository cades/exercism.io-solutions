function Binary(n) {
  this.toDecimal = function() {
    if (n.match(/[^0,1]/g)) return 0
    return parseInt(n, 2)
  }
}

module.exports = Binary;
