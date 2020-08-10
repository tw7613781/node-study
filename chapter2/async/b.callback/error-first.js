function interview (callback) {
  setTimeout(() => {
    if (Math.random() < 0.8) {
      callback(null, 'success')
    } else {
      callback(new Error('fail'))
    }
  }, 500)
}

/**
 * try catch只能抓到一个调用堆栈内，即一个事件循环里的错误
 */
// try {
interview((error, res) => {
  if (error) {
    console.log('cry')
    return
  }
  console.log('smile')
})

// } catch (e) {
//     console.log('cry')
// }
