function interview (callback) {
  setTimeout(() => {
    if (Math.random() < 0.8) {
      callback(null, 'success')
    } else {
      callback(new Error('fail'))
    }
  }, 500)
}

interview((err, res) => {
  if (err) {
    console.log('cry at 1st round')
    return
  }
  interview((err, res) => {
    if (err) {
      console.log('cry at 2nd round')
      return
    }
    interview((err, res) => {
      if (err) {
        console.log('cry at 3rd round')
        return
      }
      console.log('smile')
    })
  })
})
