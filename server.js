const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html', 'text/html' )
      break
    case '/index.html':
      sendFile( response, 'index.html', 'text/html' )
      break
    case '/wpi.png':
    sendFile(response, 'wpi.png', 'image/png')
      break
    default:
      response.end( '404 Error: File Not Found' )
  }
})

server.listen( process.env.PORT || port )

const sendFile = function(response, filename, contentType) {
  fs.readFile(filename, function(err, content) {
    if (err) {
      response.writeHead(404, { 'Content-Type': 'text/plain' })
      response.end('File Not Found')
      return
    }
    response.writeHead(200, { 'Content-Type': contentType })
    response.end(content)
  })
}