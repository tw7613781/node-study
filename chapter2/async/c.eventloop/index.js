// 简单的例子，表示事件循环
// 但是真正的事件循环会复杂一点，里面的queue不只一个，然后循环看每个queue里面。

const eventloop = {
  queue: [],

  loop () {
    while (this.queue.length) {
      var callback = this.queue.shift()
      callback()
    }

    setTimeout(this.loop.bind(this), 50)
  },

  add (callback) {
    this.queue.push(callback)
  }
}

eventloop.loop()

setTimeout(() => {
  eventloop.add(() => {
    console.log(1)
  })
}, 500)

setTimeout(() => {
  eventloop.add(() => {
    console.log(2)
  })
}, 800)
