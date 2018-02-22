function Crypto(text) {
  return {
    normalizePlaintext() {
      return text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g, '').toLowerCase();
    },
    size() {
      return Math.ceil(Math.sqrt(this.normalizePlaintext().length));
    },
    plaintextSegments() {
      const res = [];
      const size = this.size();
      const normalizedText = this.normalizePlaintext();
      for (var i = 0; i < normalizedText.length; i += size)
        res.push(normalizedText.slice(i, i + size))
      return res;
    },
    ciphertext() {
      let res = '';
      const size = this.size();
      const segments = this.plaintextSegments();
      for (var i = 0; i < size; i++)
        res += segments.map(s => s[i]).join('');
      return res;
    },
  }
}

module.exports = Crypto;
