const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
  const stripped = request.url.slice(1)
  sendFile( response, stripped || 'index.html' )
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
  if( filename === 'myStyle.css' ) {
     response.setHeader( 'Content-Type', 'text/css' )
   }
   fs.readFile( filename, function( err, content ) {
     response.end( content, 'utf-8' )
   })
}
