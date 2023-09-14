

class T200Database {
	constructor() {
		this.database = {};
	}
	
	connect(db, host, port) {
		if('mariadb' === db) {
			const T200Mariadb = require('./T200Mariadb.js');
			
			this.database = new T200Mariadb();	
			
			this.database.connect(host, port);
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