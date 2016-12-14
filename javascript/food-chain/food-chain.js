function FoodChain() {
  var map = [null, {
    food: 'fly',
    murmur: ''
  }, {
    food: 'spider',
    murmur: 'It wriggled and jiggled and tickled inside her.\n'
  }, {
    food: 'bird',
    murmur: 'How absurd to swallow a bird!\n'
  }, {
    food: 'cat',
    murmur: 'Imagine that, to swallow a cat!\n'
  }, {
    food: 'dog',
    murmur: 'What a hog, to swallow a dog!\n'
  }, {
    food: 'goat',
    murmur: 'Just opened her throat and swallowed a goat!\n'
  }, {
    food: 'cow',
    murmur: 'I don\'t know how she swallowed a cow!\n'
  }, {
    food: 'horse',
    murmur: 'She\'s dead, of course!\n'
  }]

  this.verses = function(x, y) {
    var res = ''
    for (var i = x; i <= y; i++) {
      res += this.verse(i) + '\n'
    }
    return res
  }

  this.verse = function(n) {
    var selection = map[n]
    return `I know an old lady who swallowed a ${selection.food}.\n` + selection.murmur + this.verse_(n)
  }

  this.verse_ = function(n) {
    if (n === 1) return 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n'
    if (n === 2) return 'She swallowed the spider to catch the fly.\n' + this.verse_(1)
    if (n === 3) return 'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' + this.verse_(2)
    if (n === 4) return 'She swallowed the cat to catch the bird.\n' + this.verse_(3)
    if (n === 5) return 'She swallowed the dog to catch the cat.\n' + this.verse_(4)
    if (n === 6) return 'She swallowed the goat to catch the dog.\n' + this.verse_(5)
    if (n === 7) return 'She swallowed the cow to catch the goat.\n' + this.verse_(6)
    if (n === 8) return ''
  }
}

module.exports = FoodChain;
