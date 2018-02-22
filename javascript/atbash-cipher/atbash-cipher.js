function encode(text) {
  return normalize(text)
    .split('').map(encodeChar)
    .reduce((res, c, i) => i % 5 === 4 ? `${res+c} ` : `${res+c}` , '')
    .trim();
};

function normalize(text) {
  return text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g, '').toLowerCase();
}

function encodeChar(c) {
  if (code(c) >= code('a') && code(c) <= code('z'))
    return String.fromCharCode( code('z') - code(c) + code('a') );
  return c;
}

function code(c) {
  return c.charCodeAt(0);
}

module.exports = {
  encode: encode
};
