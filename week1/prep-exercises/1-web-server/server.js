/**
 * Exercise 3: Create an HTTP web server
 */

const http = require('http');
const fs = require('fs');
const url = require('url');


http.createServer(function (req, res) {
  // YOUR CODE GOES IN HERE
  if (req.url === '/') {
    fs.readFile('./index.html', function (err, data) {
      if (err) {
        throw err;
      }
      res.setHeader('Content-Type', 'text/html');
      res.write(data); // Sends a response back to the client
      res.end();
    })
    return;
  }

  if (req.url === '/index.js') {
    fs.readFile('./index.js', function (err, data) {
      if (err) {
        throw err;
      }
      res.setHeader('Content-Type', 'application/javascript');
      res.write(data); // Sends a response back to the client
      res.end(); // Ends the response
    })
    return;
  }


}).listen(3000);;




