const http = require('http');
const T200HttpSetup = require('./T200HttpSetup.js');

class T200HttpServer {
	constructor() {
		this.setup = new T200HttpSetup();
	} 
	
	start() {
		var server = http.createServer(function(req, res) {
		
		});
		
		server.listen(this.setup.port);
	}
}

module.exports = T200HttpServer;