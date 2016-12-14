function Gigasecond(date) {
  this.date = function() {
    return new Date(+date + Math.pow(10, 9) * 1000)
  }
}

module.exports = Gigasecond;
