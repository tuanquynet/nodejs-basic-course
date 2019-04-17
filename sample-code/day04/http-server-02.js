const http = require('http');

const hostname = 'localhost';
const port = 3000;

const router = {
	'get/products': (req, res) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
	  res.end('<h1>get/products</h1>\n');
	},
	'post/products': (req, res) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
	  res.end('<h1>post/products</h1>\n');
	},
}

const server = http.createServer((req, res) => {
  console.log('req.headers', req.headers);
	console.log('req.url', req.url);
	
	const method = req.method.toLowerCase();
	const pathName = req.url.toLowerCase();
	const routeName = `${method}${pathName}`;

	// This code cause Error: Can't set headers after they are sent.
	Object.keys(router).forEach((key) => {
		if (key === routeName) {
			return router[key](req, res);
		}
	});

	/* 
	// Enhancement
	const routerNames = Object.keys(router);
	for (const key of routerNames) {
		if (key === routeName) {
			return router[key](req, res);
		}
	} */

	res.statusCode = 404;
	res.setHeader('Content-Type', 'text/html');
  res.end('<h1>404 Page Not Found</h1>\n');
	// let's add some routing rules
});

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
