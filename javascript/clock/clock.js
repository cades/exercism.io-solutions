function at(hour, minute) {
  minute = minute || 0
  while (minute < 0) {
    hour -= 1
    minute += 60
  }
  while (hour < 0) hour += 24

  hour = (hour + Math.floor(minute / 60) ) % 24
  minute = minute % 60

  return {
    hour: hour,
    minute: minute,
    toString: function() {
      return pad(hour) + ':' + pad(minute)
    },
    equals: function(clock) {
      return this.toString() === clock.toString()
    },
    plus: function(minute) {
      return at(this.hour, this.minute + minute)
    },
    minus: function(minute) {
      return this.plus(-minute)
    }
  }
}

function pad(n) {
  return ('00' + n).substr(-2, 2)
}

module.exports = {
  at: at
};
