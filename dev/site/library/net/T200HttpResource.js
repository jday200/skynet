const fs = require('fs');
const path = require('path');

class T200HttpResource {
	constructor() {
		
	}
	
	load(file, callback) {
		var temp = "../../home"  + file;
		var real = path.join(__dirname, temp);
		
		console.log(real);		
		
		fs.readFile(real, callback);
	}

	async load_js(file) {
		var name = path.join("", file);
		var real = path.join(__dirname, name);

		console.log(real);

		if(fs.existsSync(real)) {
			var result = require(real);

			if(result){
				result();
			}
		}
	}
}

module.exports = T200HttpResource;