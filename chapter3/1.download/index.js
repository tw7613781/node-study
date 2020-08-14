/* eslint-disable no-path-concat */
/* eslint-disable new-cap */
const koa = require('koa')
const fs = require('fs')
const mount = require('koa-mount')
const serve = require('koa-static')

const app = new koa()

app.use(serve(__dirname + '/source/'))

app.use(mount('/', async (ctx) => {
  ctx.body = fs.readFileSync(__dirname + '/source/index.htm', 'utf-8')
}))

app.listen(3000)
