const T200HttpResource = require('./T200HttpResource.js');

class T200HttpRequest {
	constructor() {
		this.actions = {};
	}
	
	run(action, req, res) {
		var result;
		
		result = this.actions[action];
		
		if(result){
			var HttpResource = new T200HttpResource();

			var flag = HttpResource.exsits(result);
			
			if(flag){
				var done = HttpResource.load(result);
				
				if(done){
					done();	
				}	
			}else{
				
			}			
			 
			return null;
		}else{
			return 1;	
		}
	}
	
	get(){
		
	}
	
	post(){
		
	}
}

module.exports = T200HttpRequest;