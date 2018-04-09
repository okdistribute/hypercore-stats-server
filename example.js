var swarm = require('hyperdrive-archive-swarm')
var hyperdrive = require('hyperdrive')
var http = require('http')
var memdb = require('memdb')
var stats = require('./')

http.createServer(function (req, res) {
  // set up a drive
  var drive = hyperdrive(memdb())
  var archive = drive.createArchive('2d8186c581cd9c1b4f45e42eb765cebcba983feb8a0525d7bffee1ce3b7a9471')

  // attach the swarm
  swarm(archive)

  // stats for the given drive will be sent to /events
  if (req.url === '/events') stats(archive, res)
  else res.end('hi. hit /events for stat events')
}).listen(10000)
