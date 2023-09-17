const T200HttpSetup = require('../library/net/T200HttpSetup.js');

class T200HomeSetup extends T200HttpSetup {
	constructor() {
		super();

		this.host = "localhost";
		this.port = 8888;
		this.path = "../../home";
		this.actions = "../../project/actions";
		this.default = "index.html,index.htm";
	}

}

module.exports = T200HomeSetup;