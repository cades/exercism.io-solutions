function Isogram(word) {
  this.isIsogram = function() {
    let letters = word.split('').map((c) => c.toLowerCase())
          .filter((c) => c.match(/[^\s-]/))
    return letters.length === [...new Set(letters)].length
  }
}

module.exports = Isogram;
