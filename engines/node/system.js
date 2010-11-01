'use strict'

var sys = require('sys')

,   stdin

module.exports = Object.freeze(Object.create(Object.prototype,
{ stdout: { value: process.stdout }
, stdin: { get: function() { return stdin || (stdin = process.openStdin()) } }
, stderr: { get: function() { return stdin || (stdin = process.openStdin()) } }
, env: { value: process.env }
, args: { value: process.argv }
, print: { value: sys.puts }
, engine: { value: 'node' }
}))
