module.exports = {
  for: function(x) {
    let containsFactor = (n) => x % n === 0
    let ans = (prime) => [prime].concat(this.for(x/prime))

    if (x === 1)
      return []

    if (containsFactor(2))
      return ans(2)

    for (var i = 3; i <= Math.ceil(Math.sqrt(x)); i += 2)
      if (containsFactor(i))
        return ans(i)

    return [x]
  }
}
