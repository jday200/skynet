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
		let result;

		result = actions[action];

		if(result){
			try{
				result();
			}catch(err){
				res.writeHead(404);
				res.end();
			}finally{

			}
		}else{
			let HttpResource = new T200HttpResource();

			let real_js = HttpResource.parse_js(action);

			let flag = HttpResource.existsSync(real_js);

			if(flag){
				flag = HttpResource.load_js(real);

				if(flag){

				}else{
					res.writeHead(404);
					res.end();
				}
			}

			let real_html = HttpResource.parse_html(action);

			flag = HttpResource.existsSync(real_html);

			if(flag){
				HttpResource.load(real_html, function(err, data){
					if(err){
						res.writeHead(404);
						res.end();
					}else{
						res.writeHead(200);
						res.end(data);
					}
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