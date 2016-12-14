function SpaceAge(seconds) {
  this.seconds = seconds
  function onEarth() { return seconds / 31557600 }
  this.onEarth   = function() { return round( onEarth() ) }
  this.onMercury = function() { return round( onEarth() / 0.2408467 ) }
  this.onVenus   = function() { return round( onEarth() / 0.61519726 ) }
  this.onMars    = function() { return round( onEarth() / 1.8808158 ) }
  this.onJupiter = function() { return round( onEarth() / 11.862615 ) }
  this.onSaturn  = function() { return round( onEarth() / 29.447498 ) }
  this.onUranus  = function() { return round( onEarth() / 84.016846 ) }
  this.onNeptune = function() { return round( onEarth() / 164.79132 ) }
}

function round(x) {
  return Math.round( x * 100) / 100
}

module.exports = SpaceAge;
