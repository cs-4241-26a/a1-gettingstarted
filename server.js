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
    case '/style.css':
      sendFile( response, 'style.css', 'text/css' )
      break
    default:
      response.end( '404 Error: File Not Found' )
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename, contentType ) {
   response.writeHead( 200, { 'Content-Type': contentType } )
   fs.readFile( filename, function( err, content ) {
     response.end( content, 'utf-8' )
   })
}
