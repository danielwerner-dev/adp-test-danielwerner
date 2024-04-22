const http = require('http');
const fs = require('fs');
const path = require('path');

const prefix = './static/';

const server = http.createServer((request, response) => {
  let filePath = `${request.url}`;
  if (filePath === '/') {
    filePath = '/index.html';
  }

  filePath = `${prefix}${filePath}`;

  const extname = String(path.extname(filePath)).toLowerCase();
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.wasm': 'application/wasm',
  };

  const contentType = mimeTypes[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        return send404Response(response);
      } else if (error.code === 'EBADF') {
        return send400Response(response, `Invalid file descriptor: ${error.code}`);
      } else {
        return send503Response(response, `Error communicating with database: ${error.code}`);
      }
    } else {
      send200Response(response, content, contentType);
    }
  });
  
  function send404Response(response) {
    fs.readFile('./404.html', (error404, content404) => {
      response.writeHead(404, { 'Content-Type': 'text/html' });
      response.end('Value not found for specified ID', 'utf-8');
    });
  }
  
  function send400Response(response, errorMessage) {
    response.writeHead(400);
    response.end('Incorrect value in result; no ID specified; value is invalid' + '..\n');
  }
  
  function send503Response(response, errorMessage) {
    response.writeHead(503);
    response.end('Error communicating with database' + '..\n');
  }
  
  function send200Response(response, content, contentType) {
    response.writeHead(200, { 'Content-Type': contentType });
    response.end(content, 'utf-8');
  }
});

module.exports = server;
