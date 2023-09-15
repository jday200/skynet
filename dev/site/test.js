const T200Mariadb = require('./library/db/T200Mariadb.js');

async function test() {
var home = new T200Mariadb();

await home.connect('localhost', 3306, 'home', 'home', 'home123');

await home.execute("select * from users");

var result;

result = await home.query("select * from users");

console.log(result);

await home.disconnect();
}

test();
