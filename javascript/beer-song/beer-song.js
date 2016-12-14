module.exports = BeerSong;

function BeerSong() {
  this.verse = function(n) {
    var verse = (function(){
      if (n === 0) return new ZeroBottleVerse()
      if (n === 1) return new OneBottleVerse()
      return new SeveralBottleVerse(n)
    })()
    return verse.get()
  }

  this.sing = function(x, y) {
    var lyrics = []

    for (var i = x; i >= (y || 0); i--)
      lyrics.push(this.verse(i))

    return lyrics.join('\n')
  }
}

function ZeroBottleVerse() {
  this.currentBottles = 'no more'
  this.action = 'Go to the store and buy some more'
  this.remainBottles = 99
  this.get = getVerse
}

function OneBottleVerse() {
  this.currentBottles = 1
  this.action = 'Take it down and pass it around'
  this.remainBottles = 'no more'
  this.get = getVerse
}

function SeveralBottleVerse(n) {
  this.currentBottles = n
  this.action = 'Take one down and pass it around'
  this.remainBottles = n - 1
  this.get = getVerse
}

function getVerse() {
  return `${capitalize(howManyBottles(this.currentBottles))} of beer on the wall, ${howManyBottles(this.currentBottles)} of beer.
${this.action}, ${howManyBottles(this.remainBottles)} of beer on the wall.
`
}

function capitalize(s) {
  return s[0].toUpperCase() + s.substr(1)
}

function howManyBottles(bottles) {
  return `${bottles} ${bottles === 1 ? 'bottle' : 'bottles'}`
}

