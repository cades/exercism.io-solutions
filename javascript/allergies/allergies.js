function Allergies(n) {
  let types = [
    { value: 128, item: 'cats' },
    { value: 64, item: 'pollen' },
    { value: 32, item: 'chocolate' },
    { value: 16, item: 'tomatoes' },
    { value: 8, item: 'strawberries'},
    { value: 4, item: 'shellfish'},
    { value: 2, item: 'peanuts' },
    { value: 1, item: 'eggs' }
  ]
  let totalPoints = types.reduce((sum, it) => sum + it.value, 0)
  n = n % (totalPoints + 1)

  this.list = function() {
    for (let {value, item} of types) {
      if (n >= value) return new Allergies(n - value).list().concat(item)
    }
    return []
  }
  this.allergicTo = function(item) {
    return this.list().includes(item)
  }
}

module.exports = Allergies;
