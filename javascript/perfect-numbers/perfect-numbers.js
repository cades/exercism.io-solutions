function PerfectNumbers() {
  return {
    classify(x) {
      if (x <= 0) return 'Classification is only possible for natural numbers.';
      const sum = aliquotSum(x);
      return sum === x ? 'perfect' :
        sum > x ? 'abundant' : 'deficient';
    }
  };
}

function aliquotSum(n) {
  return range(n).filter(i => n % i === 0).reduce((sum, i) => sum + i, 0)
}

function range(n) {
  return Array.from(new Array(n - 1), (x,i) => i+1)
}

module.exports = PerfectNumbers;
