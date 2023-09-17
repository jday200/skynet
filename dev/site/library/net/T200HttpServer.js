const http = require('http');
const T200HttpSetup = require('./T200HttpSetup.js');
const T200HttpRequest = require('./T200HttpRequest.js');
const T200HttpDispatcher = require('./T200HttpDispatcher.js');

class T200HttpServer {
	constructor() {
		global.setup = new T200HttpSetup();
	} 
	
	start() {
		global.request = new T200HttpRequest();
		
		let server = http.createServer(function(req, res) {
			let HttpDispatcher = new T200HttpDispatcher();
			
			HttpDispatcher.run(req, res);		
		});
		
		server.listen(global.setup.port);
	}
}

module.exports = T200HttpServer;