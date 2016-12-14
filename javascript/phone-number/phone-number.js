function PhoneNumber(s) {
  var invalidNumber = '0000000000'
  this.number = function() {
    var trimmed = s.replace(/[^\d]/g, '')
    if (trimmed.length === 11 && trimmed[0] === '1')
      return trimmed.substr(1)
    if (trimmed.length !== 10) return invalidNumber
    return trimmed
  }

  this.areaCode = function() {
    return this.number().substr(0, 3)
  }

  this.toString = function() {
    var number = this.number()
    return `(${number.substr(0, 3)}) ${number.substr(3, 3)}-${number.substr(6)}`
  }
}

module.exports = PhoneNumber;
