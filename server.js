const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const INDEX_FILE = path.join(__dirname, 'index.html');

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    fs.readFile(INDEX_FILE, (err, data) => {
      if (err) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Error loading index.html');
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
