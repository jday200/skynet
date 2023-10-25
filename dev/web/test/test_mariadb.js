const { error, log, log_start, log_stop } = require('../library/lib.js');
const T200Mariadb = require('../library/db/T200Mariadb.js');
const T200DBSetup = require('../library/db/T200DBSetup.js');


log_start(__filename, "test_mariadb");

let setup = new T200DBSetup();
let mariadb  = new T200Mariadb();

setup.database = "home";
setup.user = "home";
setup.password = "home123";

mariadb.start(setup).then(function(){
    log(__filename, "mariadb start success");
    mariadb.connect().then(function(){
        log(__filename, "mariadb connect success");
        let sql = "select * from person";
        return mariadb.query(sql).then(function(data){
            log(__filename, "mariadb query success", sql);
        }, function(err){
            log(__filename, "mariadb query failure", err.msg);
        }).finally(function(){
            return mariadb.disconnect().then(function(){
                log(__filename, "mariadb disconnect success");
            }, function(err){
                log(__filename, "mariadb disconnect failure", err.msg);
            });
        });
        
    }, function(err){
        log(__filename, "mariadb connect failure", err.msg);
    }).finally(function(){
        return mariadb.stop().then(function(){
            log(__filename, "mariadb stop success");
        }, function(err){
            log(__filename, "mariadb stop failure", err.msg);
        });
    });
    
}, function(err){
    log(__filename, "mariadb start failure", err.msg);
});

log_stop(__filename, "test_mariadb");
