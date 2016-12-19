function circularBuffer(size) {
  var buffer = []
  return {
    read: function() {
      if (buffer.length <= 0) throw new bufferEmptyException()
      return buffer.shift()
    },
    write: function(data) {
      if (data === null || typeof data === 'undefined') return
      if (buffer.length === size) throw new bufferFullException()
      buffer.push(data)
    },
    clear: function() {
      buffer = []
    },
    forceWrite: function(data) {
      if (buffer.length < size)
        return this.write(data)
      buffer.push(data)
      buffer.shift()
    }
  }
}

function bufferEmptyException() {}
function bufferFullException() {}

module.exports = {
  circularBuffer: circularBuffer,
  bufferEmptyException: bufferEmptyException,
  bufferFullException: bufferFullException
}
