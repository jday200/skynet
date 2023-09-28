const T200DBSetup = require('../library/db/T200DBSetup.js');
const T200Mariadb = require('../library/db/T200Mariadb.js');

let mariadb = new T200Mariadb();


function stop(){
    console.log('stop');
    return mariadb.stop().then(function(){
        console.log('success4');
    }, function(){
        console.log('failure4');
    });
}


function disconnect(){
    console.log('disconnect');
    return mariadb.disconnect().then(function(){
        return stop();
    }, function(){
        console.log('failure3');
    });
}

function query(){
    let sql;

    console.log('query');
    sql = "select * from person";
    return mariadb.query(sql).then(function(){
        return disconnect();
    }, function(){
        return disconnect();
    });
} 

function connect(){
    console.log('connect');
    return mariadb.connect().then(function(){
        return query();
    }, function(){
        console.log('failure2');
    });
} 

function start(){
    console.log('start');
    let setup = new T200DBSetup();

    setup.database = "home";
    setup.user = "home";
    setup.password = "home123";

    return mariadb.start(setup).then(function(){
        console.log('success1');
        //return connect();
    }, function(){
        console.log('failure1');
    });
}

start();