const url = require('url');
const T200HttpResource = require('./T200HttpResource.js');


class T200HttpDispatcher {
	constructor() {
		
	}

	run(req, res) {
		let result = url.parse(req.url);

		console.log(result);
		//console.log(req);
		console.log(result.path);

		global.request.run(req.method, result.path, req, res);

	}

}

module.exports = T200HttpDispatcher;