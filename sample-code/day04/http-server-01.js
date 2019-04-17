const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  console.log('req.headers', req.headers);
	console.log('req.url', req.url);
	
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>404 Page Not Found</h1>\n');
	// let's add some routing rules
});

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
