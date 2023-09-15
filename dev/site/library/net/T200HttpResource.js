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
}

module.exports = T200HttpResource;