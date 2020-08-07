module.exports = function (playerAction) {
  console.log('playerAction: ', playerAction)

  if (['rock', 'scissor', 'paper'].indexOf(playerAction) === -1) {
    throw new Error('invalid playerAction')
  }

  var random = Math.random() * 3

  var computerAction

  if (random < 1) {
    computerAction = 'rock'
  } else if (random > 2) {
    computerAction = 'scissor'
  } else {
    computerAction = 'paper'
  }

  console.log('computerAction: ', computerAction)

  if (computerAction === playerAction) {
    console.log('平局')
    return 0
  } else if (
    (computerAction === 'rock' && playerAction === 'paper') ||
  (computerAction === 'scissor' && playerAction === 'rock') ||
  (computerAction === 'paper' && playerAction === 'scissor')
  ) {
    console.log('你赢了')
    return 1
  } else {
    console.log('你输了')
    return -1
  }
}
