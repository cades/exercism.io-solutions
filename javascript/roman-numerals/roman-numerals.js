function toRoman(n) {
  var res = ''

  if (n > 1000) {
    res = res + 'M'.repeat(Math.floor(n/1000)) // M = 1000
    n = n % 1000
  }

  if (n > 100) {
    res = res + 'C'.repeat(Math.floor(n/100)) // C = 100
      .replace('C'.repeat(9), 'CM')    // M = 1000
      .replace('C'.repeat(5), 'D')     // D = 500
      .replace('C'.repeat(4), 'CD')
    n = n % 100
  }

  if (n > 10) {
    res = res + 'X'.repeat(Math.floor(n/10)) // X = 10
      .replace('X'.repeat(9), 'XC')          // C = 100
      .replace('X'.repeat(5), 'L')           // L = 50
      .replace('X'.repeat(4), 'XL')
    n = n % 10
  }

  res = res + 'I'.repeat(n)       // I = 1
    .replace('I'.repeat(9), 'IX') // X = 10
    .replace('I'.repeat(5), 'V')  // V = 5
    .replace('I'.repeat(4), 'IV')

  return res
}

module.exports = toRoman;
