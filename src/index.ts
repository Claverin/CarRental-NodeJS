import * as http from 'http'

const server: http.Server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse): void => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello World\n')
})

server.listen(5000, '', (): void => {
  console.log('Server running at http://localhost:3000/')
})