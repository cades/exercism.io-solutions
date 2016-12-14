function parse(str) {
  return str.replace(/[,.:]/, '')
    .split(/[ -]/)
    .map(getAbbrev).join('')
}

function getAbbrev(x) {
  if (x.toLowerCase() === x || x.toUpperCase() === x)
    return x.toUpperCase()[0]

  return parse(
    x.replace(/[A-Z]/g, function(c, i){
      return (i === 0 ? '': ' ') + c.toLowerCase()
    })
  )
}

module.exports = {
  parse: parse
};
