/* eslint-disable node/no-deprecated-api */
/* eslint-disable no-path-concat */
const querystring = require('querystring')
const http = require('http')
const url = require('url')
const fs = require('fs')

const game = require('./game')

let playerWon = 0
let playerLastAction = null
let sameCount = 0

http
  .createServer((req, res) => {
    const parseUrl = url.parse(req.url)

    if (parseUrl.pathname === '/favicon.ico') {
      res.writeHead(200)
      res.end()
      return
    }

    if (parseUrl.pathname === '/game') {
      const query = querystring.parse(parseUrl.query)
      const playerAction = query.action

      if (playerWon >= 3 || sameCount === 9) {
        res.writeHead(500)
        res.end('我再也不和你玩了！')
        return
      }
      if (playerLastAction && playerAction === playerLastAction) {
        sameCount++
      } else {
        sameCount = 0
      }
      playerLastAction = playerAction
      if (sameCount >= 3) {
        res.writeHead(400)
        res.end('你作弊！')
        sameCount = 9
        return
      }
      const gameResult = game(playerAction)
      if (gameResult === 0) {
        res.end('平局！')
      } else if (gameResult === 1) {
        res.end('你赢了！')
        playerWon++
      } else {
        res.end('你输了！')
      }
    }

    if (parseUrl.pathname === '/') {
      fs.createReadStream(__dirname + '/index.html').pipe(res)
    }
  })
  .listen(3000)
