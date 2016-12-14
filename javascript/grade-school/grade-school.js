function School() {
  var _roster = {}

  this.roster = function() {
    return _roster
  }

  this.add = function(name, grade) {
    if (!(grade in _roster))
      return _roster[grade] = [name]
    _roster[grade] = _roster[grade].concat(name).sort()
  }

  this.grade = function(g) {
    if (!_roster[g])
      return []
    return _roster[g].sort()
  }
}

module.exports = School;
