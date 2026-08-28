const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {

  //const stripped = reqiest.url.slic(1)
  //if (request.url != '/'){sendFile response, stripped}else{sendFile(response, 'index.htm')}
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html' )
      break
    case '/assets/IMG_9792.JPEG':
      sendFile( response, 'assets/IMG_9792.JPEG' )
      break
    case '/css/styles.css':
      sendFile(response, 'css/styles.css')
      break
    case '/index.html':
      sendFile( response, 'index.html' )
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
