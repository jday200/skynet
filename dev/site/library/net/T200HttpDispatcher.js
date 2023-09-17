const url = require('url');
const T200HttpResource = require('./T200HttpResource.js');


class T200HttpDispatcher {
	constructor() {
		
	}

	run(req, res) {
		let result = url.parse(req.url);

		console.log(result);

		global.request.run(result.protocol, result.path, req, res);

	}

}

module.exports = T200HttpDispatcher;