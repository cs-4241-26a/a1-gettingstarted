const http = require('http'),
    fs   = require('fs'),
    path = require('path'),
    port = 3000

const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html' )
      break
    case '/index.html':
      sendFile( response, 'index.html' )
      break
    case '/main.css':
      response.setHeader("Content-Type", "text/css")
      sendFile( response, 'main.css')
      break
    case '/spiderman.png':
      response.setHeader("Content-Type", "image/png")
      fs.readFile('spiderman.png', function(err, content) {
        response.end(content)
      })
      break
    default:
      response.end( '404 Error: File Not Found' )
  }
})



server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
  fs.readFile( filename, function( err, content ) {
    response.end( content, 'utf-8' )
  })
}
