const mariadb = require('mariadb');


var pool = mariadb.createPool({
	host:'localhost',
	database:'home',
	user:'home',
	password:'home123'
});

async function connect() {
	let conn;
	
	conn = await pool.getConnection();
	
	console.log(conn);	
	
	const res = await conn.query('select * from users');
	
	console.log(res);
	
	conn.end();
}


connect();