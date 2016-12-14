function Words() {
  this.count = function(str) {
    var map = {}
    str.trim().split(/[\s]/).forEach((word) => {
      word = word.toLowerCase()
      if (!word) return
      if (!map.hasOwnProperty(word)) map[word] = 0
      map[word]++
    })
    return map
  }
}

module.exports = Words;
