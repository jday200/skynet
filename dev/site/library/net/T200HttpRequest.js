const T200HttpResource = require('./T200HttpResource.js');

class T200HttpRequest {
	constructor() {
		this.get = {};
		this.post = {};
	}
	
	run(method, action, req, res) {
		if('get' === method) {
			this.execute(this.get, action, req, res);
		}else if('post' === method) {
			this.execute(this.post, action, req, res);
		}

	}

	execute(actions, action, req, res) {
		var result;

		result = actions[action];

		if(result){
			var HttpResource = new T200HttpResource();

			var flag = HttpResource.exists(result);

			if(flag){
				HttpResource.load_js(result);
			}else{

			}
		}else{
			var HttpResource = new T200HttpResource();

			var flag = HttpResource.exists(action);

			if(flag){
				HttpResource.load(action, function(err, data){
					if(err)throw err;
					res.writeHead(200);
					res.end(data);
				});
			}else{
				res.writeHead(404);
				res.end();
			}

		}
	}
	
	get(action, callback){
		this.get[action] = callback;
	}
	
	post(action, callback){
		this.post[action] = callback;
	}
}

module.exports = T200HttpRequest;