var swarm = require('hyperdrive-archive-swarm')
var hyperdrive = require('hyperdrive')
var http = require('http')
var memdb = require('memdb')
var stats = require('./')

http.createServer(function (req, res) {

  // set up a drive
  var drive = hyperdrive(memdb())
  var archive = drive.createArchive('cef471bf52b561014a94aad7883391cd9b40c4db8945fe49d0c0b9a574a70a3')

  // attach the swarm
  swarm(archive)

  // stats for the given drive will be sent to /events
  if (req.url === '/events') stats(archive, res)
  else res.end('hi. hit /events for stat events')
  
}).listen(10000)
