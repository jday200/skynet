

class T200Database {
	constructor() {
		this.database = {};
	}
	
	connect(service, host, port, db, username, password) {
		if('mariadb' === service) {
			const T200Mariadb = require('./T200Mariadb.js');
			
			this.database = new T200Mariadb();	
			
			console.log('mariabdb...');			
			
			this.database.connect(host, port, db, username, password);
		}
	}
	
	disconnect() {
		if(this.database) {
			this.database.disconnect();
		}
	}
	
	execute(sql) {
		this.database.execute(sql);
	}
}

module.exports = T200Database;