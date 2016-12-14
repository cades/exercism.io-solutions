function Anagram(input) {
  this.matches = function() {
    var list;
    if (Array.isArray(arguments[0]))
      list = arguments[0]
    else
      list = Array.prototype.slice.call(arguments)

    var matched = []
    list.forEach((s) => {
      if (input.toLowerCase() === s.toLowerCase())
        return
      if (normalize(s) === normalize(input))
        matched.push(s)
    })
    return matched
  }
}

function normalize(s) {
  return s.toLowerCase().split('').sort().join('')
}

module.exports = Anagram;
