console.log('index file: start require')
var lib = require('./lib')
console.log('index file: end require')

console.log('index file: ', lib)

lib.additional = 'test'

console.log('index file: ', lib)
