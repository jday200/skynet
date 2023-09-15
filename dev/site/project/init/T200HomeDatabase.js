const T200Database = require('../../library/db/T200Database.js');

class T200HomeDatabase {
	constructor() {
		
	}
	
	async clear(db) {
		var sql;
		
		sql = "drop table if exists person";
		
		await db.execute(sql);
		
		sql = "drop table if exists content";
		
		await db.execute(sql);
		
		
	}
	
	async create(db) {
		var sql;
		
		sql = "create table if not exists person(userid integer, username varchar(50), password varchar(100), email varchar(100))";
		
		await db.execute(sql);
		
		sql = "create table if not exists content(userid integer, article text)"
		
		await db.execute(sql);
	}
	
	async recreate(db) {
		console.log('recreate...');
				
		await this.clear(db);
		await this.create(db);
	}
	
	async init() {
		var database = new T200Database();
		
		console.log('connecting...');
		
		await database.connect('mariadb', 'localhost', 3306, 'home', 'home', 'home123');
		
		console.log('connected.');		
		
		await this.recreate(database);		
		
		await database.disconnect();		
	}	
	
}


var HomeDatabase = new T200HomeDatabase();

HomeDatabase.init();

module.exports = T200HomeDatabase;