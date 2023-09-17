

class T200Database {
	constructor() {
		this.database = {};
	}
	
	async connect(service, host, port, db, username, password) {
		if('mariadb' === service) {
			const T200Mariadb = require('./T200Mariadb.js');
			
			this.database = new T200Mariadb();	
			
			console.log('mariabdb...');			
			
			await this.database.connect(host, port, db, username, password);
		}
	}
	
	async disconnect() {
		if(this.database) {
			await this.database.disconnect();
		}
	}
	
	async execute(sql) {
		await this.database.execute(sql);
	}

	async query(sql) {
		console.log(this.database);
		return await this.database.query(sql);
	}
}

module.exports = T200Database;