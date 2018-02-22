function Sieve(n) {
  const table = [false, false, true].concat(range(n-2).map(i => true))
  var nextPrime = 0;
  while (nextPrime = table.findIndex((isPrime, idx) => isPrime && (idx > nextPrime))) {
    if (nextPrime === -1) break;
    var nextNonPrime;
    var i = 2;
    while (true) {
      nextNonPrime = nextPrime * i;
      if (nextNonPrime > table.length) break;
      table[nextNonPrime] = false;
      i++;
    }
  }

  return {
    primes: table.map((isPrime, idx) => isPrime ? idx : null).filter(n => n)
  }
}

function range(n) {
  return Array.from(new Array(n), (x,i) => i)
}

module.exports = Sieve;
