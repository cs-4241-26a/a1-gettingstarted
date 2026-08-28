const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html' )
      break
    case '/index.html':
      sendFile( response, 'index.html' )
      break
    case '/2page.html':
      sendFile(response, '2page.html')
      break
    case '/3page.html':
      sendFile(response, '3page.html')
      break
    case '/cat2.png':
      sendFile(response, 'cat2.png')
      break
    case '/crochet1.png':
      sendFile(response, 'crochet1.png')
      break
    case '/powerlifting.webp':
      sendFile(response, 'powerlifting.webp')
      break
    case '/realcat.png':
      sendFile(response, 'realcat.png')
      break
    case '/swimming.png':
      sendFile(response, 'swimming.png')
      break
    case '/walking.png':
      sendFile(response, 'walking.png')
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
