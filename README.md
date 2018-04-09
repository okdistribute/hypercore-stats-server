# hypercore-stats-server

Server for sending hypercore/hyperdrive stats over server-side events.

```
npm install hypercore-stats-server
```

### Example

````
var hyperdiscovery = require('hyperdiscovery')
var hyperdrive = require('hyperdrive')
var http = require('http')
var ram = require('random-access-memory')
var stats = require('hypercore-stats-server')

// create a server
http.createServer(function (req, res) {

  // set up a drive
  var drive = hyperdrive(ram, '72671c5004d3b956791b6ffca7f05025d62309feaf99cde04c6f434189694291')
  hyperdiscovery(archive)

  // stats for the given drive will be sent to /events
  if (req.url === '/events') stats(archive, res)
  else res.end('hi. hit /events for stat events')
}).listen(10000)
```

### API

##### `stats(archive, response)`

Takes a hyperdrive archive and an `http` response object. Will return server side events to the response object that represent stats as they are downloaded through the swarm.
