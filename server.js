const http = require('http'),
  fs = require('fs'),
  port = 3000

const server = http.createServer(function (request, response) {
  switch (request.url) {
    case '/':
      response.setHeader("Content-Type", "text/html")
      sendFile(response, 'index.html')
      break
    case '/index.html':
      response.setHeader("Content-Type", "text/html")
      sendFile(response, 'index.html')
      break
    case '/style.css':
      response.setHeader("Content-Type", "text/css")
      sendFile(response, 'style.css')
      break
    default:
      response.setHeader("Content-Type", "text/plain")
      response.statusCode = 404
      response.end('404 Error: File Not Found')
  }
})

server.listen(process.env.PORT || port)

const sendFile = function (response, filename) {
  fs.readFile(filename, function (err, content) {
    response.end(content, 'utf-8')
  })
}
