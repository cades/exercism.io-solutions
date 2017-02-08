module.exports = {
  keep: function(arr, pred) {
    var kept = []
    arr.forEach((it) => {
      if (pred(it))
        kept.push(it)
    })
    return kept
    return arr.filter(pred)
  },
  discard: function(arr, pred) {
    var kept = []
    arr.forEach((it) => {
      if (!pred(it))
        kept.push(it)
    })
    return kept
  }
}
