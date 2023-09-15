const http = require('http');
const T200HttpSetup = require('./T200HttpSetup.js');
const T200HttpRequest = require('./T200HttpRequest.js');
const T200HttpDispatcher = require('./T200HttpDispatcher.js');

class T200HttpServer {
	constructor() {
		this.setup = new T200HttpSetup();
	} 
	
	start() {
		global.request = new T200HttpRequest();
		
		var server = http.createServer(function(req, res) {
			var HttpDispatcher = new T200HttpDispatcher();
			
			HttpDispatcher.run(req, res);		
		});
		
		server.listen(this.setup.port);
	}
}

module.exports = T200HttpServer;