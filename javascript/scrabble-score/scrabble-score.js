function score(x) {
  if (!x) return 0
  return matchNum('aeioulnrst') +
    matchNum('dg') * 2 +
    matchNum('bcmp') * 3 +
    matchNum('fhvwy') * 4 +
    matchNum('k') * 5 +
    matchNum('jx') * 8 +
    matchNum('qz') * 10

  function matchNum(charset) {
    var pattern = new RegExp(`[${charset}]`, 'ig')
    return (x.match(pattern) || '').length
  }
}

module.exports = score;
