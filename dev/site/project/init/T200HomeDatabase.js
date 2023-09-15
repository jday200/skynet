const T200Database = require('../../library/db/T200Database.js');

class T200HomeDatabase {
	constructor() {
		
	}
	
	clear(db) {
		var sql;
		
		sql = "";
		
		db.execute(sql);
	}
	
	create(db) {
		var sql;
		
		sql = "";
		
		db.execute(sql);
	}
	
	recreate(db) {
		console.log('recreate...');
				
		this.clear(db);
		this.create(db);
	}
	
	init() {
		var database = new T200Database();
		
		console.log('connecting...');
		
		database.connect('mariadb', 'localhost', 3306, 'home', 'root', '');
		
		console.log('connected.');		
		
		this.recreate(database);		
		
		database.disconnect();		
	}	
	
}


var HomeDatabase = new T200HomeDatabase();

HomeDatabase.init();

module.exports = T200HomeDatabase;