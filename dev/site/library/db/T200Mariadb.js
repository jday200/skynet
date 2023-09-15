const mariadb = require('mariadb');

class T200Mariadb {
	constructor() {
		
	}
	
	async connect(host, port, db, username, password) {
		var setup = {};
		
		setup.host = host + ':' + port;
		//setup.port = port;
		setup.database = db;
		setup.user = username;
		setup.password = password;		
		setup.connectionLimit = 5;
		
		console.log(setup);
		
		//var pool = mariadb.createPool(setup);
		
		var pool = mariadb.createPool({
			host:'localhost',
			database:'home',
			user:'home',
			password:'home123',
			connectionLimit:5
		});
		
		console.log('get connect...');	
		console.log(pool);	
		
		
		var conn = await pool.getConnection();
		
		console.log(conn);
		
		try{
			//this.conn = await pool.getConnection();	
			this.conn = conn;
			console.log(this.conn);
		}catch(err){
			console.log("connect fault.");
			if(err)throw err;
		}finally{
			console.log('finally');
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
			console.log(this.conn);
			
			await this.conn.query(sql);
		}catch(err){
			if(err)throw err;
		}finally{
			
		}
	}

}

module.exports = T200Mariadb;