function Trinary(str) {
  return {
    toDecimal() {
      if (str.replace(/[012]/g, '') !== '') return 0;
      return str.split('').reverse().map(c => +c).map((n, i) => n * Math.pow(3, i)).reduce((sum, n) => sum + n, 0)
    },
  };
}

module.exports = Trinary;
