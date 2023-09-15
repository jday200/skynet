const T200WebServer = require('../suite/web/T200WebServer.js');
const T200HomeSetup = require('./T200HomeSetup.js');


class T200HomeServer extends T200WebServer {
	constructor() {
		super();	
		
		this.setup = new T200HomeSetup(); 
	}
}


module.exports = T200HomeServer;