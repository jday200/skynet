const mariadb = require('mariadb');

class T200Mariadb {
	constructor() {
		
	}
	
	async connect(host, port, db, username, password) {
		var setup = {};
		
		setup.host = host;
		setup.port = port;
		setup.database = db;
		setup.user = username;
		setup.password = password;		
		setup.connectionLimit = 5;
		
		var pool = mariadb.createPool(setup);
		
		try{
			this.conn = await pool.getConnection();	
		}catch(err){
			if(err)throw err;
		}finally{
			
		}
	}
	
	async disconnect() {
		try{
			await this.conn.end();
		}catch(err){
			if(err)throw err;
		}finally{
			
		}
	}
	
	async execute(sql) {
		try{
			await this.conn.query(sql);
		}catch(err){
			if(err)throw err;
		}finally{
			
		}
	}

}

module.exports = T200Mariadb;