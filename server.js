const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer((request, response) => {
  if (request.url === '/styles.css') {
    response.writeHead(200, {
      'Content-Type': 'text/css'
    })

    fs.createReadStream('styles.css').pipe(response)
    return
  }
  let path = request.url.substring(1)

  if (path === '') {
    path = 'index.html'
  }

  const file = fs.createReadStream(path)

  file.on('open', () => {
    file.pipe(response)
  })

  file.on('error', () => {
    response.statusCode = 404
    response.end('404 Error: File Not Found')
  })
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     response.end( content, 'utf-8' )
   })
}
