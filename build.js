/*
 * Dependancies
 */

// core modules
var path = require('path');

// local deps
var bundler = require('./lib/app-builder2');

var publicDir = path.join(__dirname, 'public');
var privateDir = path.join(__dirname, 'private');

var g = bundler({
  root: path.join(privateDir, 'app'),
  build: publicDir
});

var gen = g();
while (!(info = gen.next()).done) {
  console.log("yield from gen()");
}

console.log("exit now");
