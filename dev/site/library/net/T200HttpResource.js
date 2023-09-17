const fs = require('fs');
const path = require('path');

class T200HttpResource {
	constructor() {
		
	}

	existsSync(file) {
		return fs.existsSync(file);
	}

	parse_html(url) {
		var result;
		var flag;

		console.log(url);
		var name = path.join(global.setup.path, url);
		var real = path.join(__dirname, name);

		return real;
	}

	parse_js(url) {
		var result;
		var flag;

		var name = path.join(global.setup.actions, url + '.js');
		var real = path.join(__dirname, name);
		console.log(real);
		return real;
	}
	
	load(file, callback) {
		fs.readFile(file, callback);
	}

	async load_js(file) {
		if(fs.existsSync(file)) {
			var result = require(file);

			if(result){
				result;
			}
		}
	}
}

module.exports = T200HttpResource;