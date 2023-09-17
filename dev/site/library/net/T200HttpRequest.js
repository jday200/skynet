const T200HttpResource = require('./T200HttpResource.js');

class T200HttpRequest {
	constructor() {
		this.get = {};
		this.post = {};
	}
	
	run(method, action, req, res) {
		console.log(method);

		if('GET' === method) {
			console.log('GET');
			console.log(action);
			this.exec_action(this.get, action, req, res);
		}else if('POST' === method) {
			console.log('POST');
			this.exec_action(this.post, action, req, res);
		}else{
			console.log('NULL');
			this.exec_html(action, req, res);
		}

	}

	exec_action(actions, action, req, res) {
		let result;

		result = actions[action];

		if(result){
			console.log(1);
			console.log(action);
			try{
				result(req, res);
			}catch(err){
				res.writeHead(404);
				res.end();
			}finally{

			}
		}else{
			console.log(2);

			let HttpResource = new T200HttpResource();
			console.log('test');
			console.log(action);
			let real_js = HttpResource.parse_js(action);

			let flag = HttpResource.existsSync(real_js);

			if(flag){
				flag = HttpResource.load_js(real_js);

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

	
	exec_html(action, req, res) {
		let HttpResource = new T200HttpResource();

		console.log(action);

		let real_js = HttpResource.parse_js(action);
		console.log(real_js);
		let flag = HttpResource.existsSync(real_js);
		console.log(flag);
		if(flag){
			flag = HttpResource.load_js(real_js);

			if(flag){

			}else{
				res.writeHead(404);
				res.end();
			}
		}

		let real_html = HttpResource.parse_html(action);
		console.log(real_html);
		flag = HttpResource.existsSync(real_html);
		console.log(flag);
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

	get(action, callback){
		this.get[action] = callback;
	}
	
	post(action, callback){
		this.post[action] = callback;
	}
}

module.exports = T200HttpRequest;