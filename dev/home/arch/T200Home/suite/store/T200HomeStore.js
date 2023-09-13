const mariadb = require('mariadb');

class T200HomeStore {
    constructor() {

    }

    async query(key, username, password) {
        var pool = mariadb.createPool({
            host: 'localhost',
            database: 'home',
            user:'root',
            password:'',
            connectionLimit: 5
        });
        
        let conn;

        console.log('query...');
        try{
            conn = await pool.getConnection();

            var rows = await conn.query("select * from users");
            console.log(rows);

            console.log(conn);
        }catch(err){
            console.log(err);
            throw err;
        }finally{
            console.log('finally');
            if(conn) return conn.end();
        }
    }
}

module.exports = T200HomeStore;