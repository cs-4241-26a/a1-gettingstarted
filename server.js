const http = require('http'),
  fs = require('fs'),
  port = 3000

const server = http.createServer(function (request, response) {
  const stripped = request.url.slice(1);
  const mime = require('mime');
  response.setHeader('Content-Type', mime.getType(stripped));
  if (request.url != '/') {
    sendFile(response, stripped);
  } else {
    sendFile(response, 'index.html');
  }
  /*
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html' )
      break
    case '/index.html':
      sendFile( response, 'index.html' )
      break
    case '/css/styles.css':
      sendFile(response, 'css/styles.css')
      break
    case '/img/Bunny_Layin.jpeg':
      sendFile(response, 'img/Bunny_Layin.jpeg')
      break
    default:
      response.end( '404 Error: File Not Found' )
  }
  */
})

server.listen(process.env.PORT || port)

const sendFile = function (response, filename) {
  fs.readFile(filename, function (err, content) {
    response.end(content, 'utf-8')
  })
}
