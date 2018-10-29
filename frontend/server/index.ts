import { createServer } from 'http'
import { parse } from 'url'
import * as next from 'next'
import * as pathMatch from 'path-match'

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const route = pathMatch()
const routes = [{
  route: (pathname: string) => route('/items/:id')(pathname),
  match: (req, res, params, query) => app.render(req, res, '/items', Object.assign(params, query))
}]

app.prepare()
.then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl
    
    let isMatched = false
    routes.forEach(r => {
      const params = r.route(pathname)
      if (params) {
        isMatched = true
        r.match(req, res, params, query)
        return
      }
    })

    if (!isMatched) {
      handle(req, res, parsedUrl)
    }
  })
  .listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})