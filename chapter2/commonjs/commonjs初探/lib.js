console.log('lib file: hello geekbang')

exports.hello = 'world'

exports.add = function (a, b) {
  return a + b
}

exports.geekbang = {
  hello: 'world'
}

module.exports = function minus (a, b) {
  return a - b
}

console.log('lib file: ', module.exports)

setTimeout(() => {
  console.log('lib file: ', exports)
}, 2000)

setTimeout(() => {
  console.log('lib file: ', module.exports)
}, 2000)
