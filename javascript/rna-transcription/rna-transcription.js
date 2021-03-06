function DnaTranscriber() {
  var map = {
    C: 'G',
    G: 'C',
    A: 'U',
    T: 'A'
  }
  this.toRna = function(input) {
    return input.split('').map((x) => map[x]).join('')
  }
}

module.exports = DnaTranscriber;
