function Triangle(x, y, z) {
  this.kind = function() {
    if (x <= 0 || y <= 0 || z <= 0)
      throw new Error('illegal edge')

    if (x + y <= z || y + z <= x || z + x <= y)
      throw new Error('violating triangle inequality')

    if (x === y && y === z)
      return 'equilateral'

    if (x === y || y === z || z === x)
      return 'isosceles'

    return 'scalene'
  }
}

module.exports = Triangle;
