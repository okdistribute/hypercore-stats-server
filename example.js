var swarm = require('hyperdrive-archive-swarm')
var hyperdrive = require('hyperdrive')
var http = require('http')
var memdb = require('memdb')
var server = require('./')

var drive = hyperdrive(memdb())
var archive = drive.createArchive('dcef471bf52b561014a94aad7883391cd9b40c4db8945fe49d0c0b9a574a70a3')

http.createServer(function (req, res) {
  if (req.url === '/events') server(archive, res)
  else res.end('hi. hit /events for stat events')
}).listen(10000)

swarm(archive)
