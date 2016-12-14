function Pangram(str) {
  this.isPangram = function() {
    var map = {}
    str.split('').map((c) => c.toLowerCase())
      .filter((c) => c.match(/[a-z]/))
      .forEach((c) => {
        if (!map[c]) map[c] = 0
        map[c]++
      })
    return Object.keys(map).length === 26
  }
}

module.exports = Pangram;
