const T200Database = require('../library/db/T200Database.js');

let Database = new T200Database();

Database.setup.database = "home";
Database.setup.user = "home";
Database.setup.password = "home123";

Database.start().then(function(){
    console.log('success');
}, function(){
    console.log('failure');
}).then(function(){
    console.log('success');
}, function(){
    console.log('failure');
});