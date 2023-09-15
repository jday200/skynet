const url = require('url');
const T200HttpResource = require('./T200HttpResource.js');


class T200HttpDispatcher {
	constructor() {
		
	}
	
	run(req, res) {
		var result = url.parse(req.url);
		
		console.log(result);
		
		var flag = global.request.run(result.path, req, res);		
		
		if(flag){
		var HttpResource = new T200HttpResource();
		
		HttpResource.load(result.path, function(err, data){
			if(err){
				res.writeHead(404);
				res.end();		
			}else{
				res.writeHead(200);
				res.end(data);
			}
		});		
		}
	}
}

module.exports = T200HttpDispatcher;