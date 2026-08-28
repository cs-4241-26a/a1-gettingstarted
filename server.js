const http = require('http'),
  fs = require('fs'),
  port = 3000

const server = http.createServer(function (request, response) {
  switch (request.url) {
    case '/':
      sendFile(response, 'index.html')
      break
    case '/index.html':
      sendFile(response, 'index.html')
      break
    case '/styles.css':
      sendFile(response, 'styles.css')
      break
    case '/color_palette.png':
      sendFile(response, 'color_palette.png')
      break
    default:
      response.end('404 Error: File Not Found')
  }
})

server.listen(process.env.PORT || port)

const sendFile = function (response, filename) {
  // Added via Prof. Robert's/Kyle P's discord message to fix Render not rendering CSS
  if (filename === 'styles.css') {
    response.setHeader('Content-Type', 'text/css')
  }

  fs.readFile(filename, function (err, content) {
    response.end(content, 'utf-8')
  })
}
