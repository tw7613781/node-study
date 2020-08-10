/**
 * promise的链式调用
 */

function interview (round) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        const err = new Error('failed')
        err.round = round
        reject(err)
      } else {
        resolve('success')
      }
    }, 300)
  })
}

interview(1)
  .then((res) => {
    return interview(2)
  })
  .then((res) => {
    return interview(3)
  })
  .then((res) => {
    if (Math.random() > 0.5) {
      const err = new Error('keyboard')
      err.round = 'keyboard'
      throw err
    } else {
      console.log('success')
    }
  })
  .catch((e) => {
    console.log('failed at ' + e.round + ' round')
  })
