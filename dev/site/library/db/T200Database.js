const T200DBSetup = require('./T200DBSetup.js');

class T200Database {
	constructor() {
		this.database = {};
		this.setup = new T200DBSetup();
	}
	
	async connect(service, host, port, db, username, password) {
		this.setup.type = service;
		this.setup.host = host;
		this.setup.port = port;
		this.setup.database = db;
		this.setup.user = username;
		this.setup.password = password;
		
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