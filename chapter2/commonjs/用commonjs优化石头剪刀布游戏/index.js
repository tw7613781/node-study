const game = require('./game')

var winCount = 0

process.stdin.on('data', (buffer) => {
  const playerAction = buffer.toString().trim()
  const ret = game(playerAction)
  if (ret === 1) {
    winCount++
    if (winCount === 3) {
      console.log('我不玩儿了！哼！')
      process.exit()
    }
  }
})
