// Tui Popenoe
// server.js - local static server
// Usage:
// install node.js
// from root directory
// npm install connect serve-static

var connect = require('connect');
var serveStatic = require('serve-static');

connect().use(serveStatic(__dirname)).listen(8080);

// node server.js