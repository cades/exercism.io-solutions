function ETL() {
  this.transform = function(input) {
    var res = {}
    Object.keys(input).map((key) => {
      input[key].map((x) => x.toLowerCase()).map((x) => res[x] = +key)
    })
    return res
  }
}

module.exports = ETL;
