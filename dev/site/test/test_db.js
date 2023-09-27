const T200Database = require('../library/db/T200Database.js');

let Database = new T200Database();

Database.setup.database = "home";
Database.setup.user = "home";
Database.setup.password = "home123";


function stop(){
    console.log('stop');
    return Database.stop().then(function(){
        console.log('success');
    }, function(){
        console.log('failure');
    });
}


function disconnect(){
    console.log('disconnect');
    return Database.disconnect().then(function(){
        return stop();
    }, function(){
        console.log('failure');
    });
}

function query(){
    let sql;

    console.log('query');
    sql = "select * from person";
    return Database.query(sql).then(function(){
        return disconnect();
    }, function(){
        return disconnect();
    });
} 

function connect(){
    console.log('connect');
    return Database.connect().then(function(){
        return query();
    }, function(){
        console.log('failure');
    });
} 

function start(){
    console.log('start');
    return Database.start().then(function(){
        console.log('success');
        return connect();
    }, function(){
        console.log('failure');
    });
}

start();