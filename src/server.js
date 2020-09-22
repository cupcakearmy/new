import sirv from 'sirv'
import polka from 'polka'
import compression from 'compression'
import * as sapper from '@sapper/server'

const { PORT, NODE_ENV } = process.env
const dev = NODE_ENV === 'development'

polka()
  .use(compression({ threshold: 0 }))
  .use(sirv('static', { dev }))
  .use(sapper.middleware())
  .listen(PORT, (err) => {
    if (err) console.log('error', err)
  })
