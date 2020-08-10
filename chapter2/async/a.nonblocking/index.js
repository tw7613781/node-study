/* eslint-disable handle-callback-err */
/* eslint-disable no-path-concat */
const glob = require('glob')

console.time('sync')
const res = glob.sync(__dirname + '/**/*')
console.log(res.length)
console.timeEnd('sync')

console.time('async')
glob(__dirname + '/**/*', (err, res) => {
  console.log(res.length)
})
console.timeEnd('async')
console.log('hello geekbang')
