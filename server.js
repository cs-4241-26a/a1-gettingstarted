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
    case '/script.js':
      sendFile(response, 'script.js');
      break;
    case '/images/image1.jpg':
      sendFile(response, 'images/image1.jpg');
      break;
    case '/images/image2.jpg':
      sendFile(response, 'images/image2.jpg');
      break;
    case '/images/image3.png':
      sendFile(response, 'images/image3.png');
      break;
    case '/images/image4.jpg':
      sendFile(response, 'images/image4.jpg');
      break;
    case '/images/image5.jpg':
      sendFile(response, 'images/image5.jpg');
      break;
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
