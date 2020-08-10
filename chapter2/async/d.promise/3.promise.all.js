/**
 * 通过Promise.all完成异步并行任务
 */

Promise.all([
  // father的reject就被后面这个catch拿走了,然后catch后面没有重新throw这个error
  // 就不会变成reject的状态，会是resolve的状态了，可以测试重新throw看看，最后的catch就会捕捉到
  family('father').catch(() => { }),
  family('mother'),
  family('wife')

]).then(() => {
  console.log('family all agree')
}).catch((err) => {
  console.log(err.name + ' not agree')
})

function family (name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        const error = new Error('disagree')
        error.name = name
        reject(error)
      } else {
        resolve('agree')
      }
    }, Math.random() * 400)
  })
}
