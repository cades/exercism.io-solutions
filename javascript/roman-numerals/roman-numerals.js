function toRoman(n) {
  return String(n).split('')
    .reverse().map((d, i) => converters[i](d))
    .reverse().join('')
}

const convertOnes      = convert({ unit: 'I', fiveUnit: 'V', tenUnit: 'X' })
const convertTens      = convert({ unit: 'X', fiveUnit: 'L', tenUnit: 'C' })
const convertHundreds  = convert({ unit: 'C', fiveUnit: 'D', tenUnit: 'M' })
const convertThousands = convert({ unit: 'M', fiveUnit: '?', tenUnit: '?' })
const converters = [convertOnes, convertTens, convertHundreds, convertThousands]

function convert({unit, fiveUnit, tenUnit}) {
  return function(n) {
    return unit.repeat(n)
      .replace(unit.repeat(9), unit + tenUnit)
      .replace(unit.repeat(5), fiveUnit)
      .replace(unit.repeat(4), unit + fiveUnit)
  }
}

module.exports = toRoman;
