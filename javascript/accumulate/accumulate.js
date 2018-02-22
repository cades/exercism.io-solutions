function accumulate(arr, accumulator) {
  const res = [];
  for (var i = 0; i < arr.length; i++) {
    res.push(accumulator(arr[i]));
  }
  return res;
}

module.exports = accumulate;
