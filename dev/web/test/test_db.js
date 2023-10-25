const { error, log, log_start, log_stop } = require('../library/lib.js');
const T200Database = require('../library/db/T200Database.js');
const T200DBSetup = require('../library/db/T200DBSetup.js');


log_start(__filename, "test database");

let setup = new T200DBSetup();
let database  = new T200Database();

database.setup.database = "home";
database.setup.user = "home";
database.setup.password = "home123";

database.start(setup).then(function(){
    log(__filename, "database start success");
    database.connect().then(function(){
        log(__filename, "database connect success");
        let sql = "select * from pe1rson";
        return database.query(sql).then(function(data){
            log(__filename, "database query success", sql);
        }, function(err){
            log(__filename, "database query failure", err.msg);
        }).finally(function(){
            return database.disconnect().then(function(){
                log(__filename, "database disconnect success");
            }, function(err){
                log(__filename, "database disconnect failure", err.msg);
            });
        });
        
    }, function(err){
        log(__filename, "database connect failure", err.msg);
    }).finally(function(){
        return database.stop().then(function(){
            log(__filename, "database stop success");
        }, function(err){
            log(__filename, "database stop failure", err.msg);
        });
    });
    
}, function(err){
    log(__filename, "mariadb start failure", err.msg);
});

log_stop(__filename, "test database");
