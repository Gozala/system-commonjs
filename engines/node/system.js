'use strict'

var print
,   stdin

try { // node >= 0.3.0
  print = require('util').puts
} catch (e) { // node <= 0.3.0
  print = require('sys').puts
}

module.exports = Object.freeze(Object.create(Object.prototype,
{ stdout: { value: process.stdout }
, stdin: { get: function() { return stdin || (stdin = process.openStdin()) } }
, stderr: { get: function() { return stdin || (stdin = process.openStdin()) } }
, env: { value: process.env }
, args: { value: process.argv }
, print: { value: print }
, engine: { value: 'node' }
}))
