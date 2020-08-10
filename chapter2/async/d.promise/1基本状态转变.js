/**
 * promise的状态转换以及通过then获取内容
 */
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('3')
    // reject(new Error('4'))
  }, 500)
})

promise
  .then((res) => {
    console.log(res)
  })
  .catch((e) => {
    console.log(e)
  })

setTimeout(() => {
  console.log(promise)
}, 800)
