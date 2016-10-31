
function hello(arg) {
  return arg || true;
}

if (typeof module === 'object') {
  module.exports = hello;
}