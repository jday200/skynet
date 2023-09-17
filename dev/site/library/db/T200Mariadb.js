const mariadb = require('mariadb');

class T200Mariadb {

	constructor() {	
	
	}
	
	async connect(host, port, database, username, password) {
		var setup = {};
		
		setup.host = host;
		setup.port = port;
		setup.database = database;
		setup.user = username;
		setup.password = password;
		
		var pool = await mariadb.createPool(setup);
		
		try{
			this.conn = await pool.getConnection();	
		}catch(err){
			if(err)throw err;
		}finally{
			console.log(this.conn);
		}
	}
	
	async disconnect() {
		try{
			this.conn.end();	
		}catch(err){
			if(err)throw err;
		}finally{
			
		}	
	}

	async execute(sql) {
		console.log(this.conn);
		console.log(sql);

		let result;
		try{
			result = await this.conn.query(sql);	
		}catch(err){
			if(err)throw err;
		}finally{
			console.log(result);
		}	
	}	
	
	async query(sql) {

		console.log(sql);
		
		let result;		
		try{
			result = await this.conn.query(sql);
		}catch(err){
			if(err)throw err;
		}finally{
			return result;			
		}
	}
	
	
	async test() {
		var pool = mariadb.createPool({
			host:'localhost',
			database:'home',
			user:'home',
			password:'home123'		
		});	
		
		console.log(pool);
		
		var conn = await pool.getConnection();
		
		console.log(conn);
		
		this.conn = conn;
		
		console.log(this.conn);
		
		var res = await this.conn.query("select * from users");
		
		console.log(res);
	}	

}

module.exports = T200Mariadb;