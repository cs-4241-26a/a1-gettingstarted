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
    case '/couplets.jpeg':
      sendFile( response, 'couplets.jpeg', 'image/jpeg' )
      break
    default:
      response.end( '404 Error: File Not Found' )
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename, type ) {
   response.setHeader( 'Content-Type', type )
   fs.readFile( filename, function( err, content ) {
     response.end( content, 'utf-8' )
   })
}