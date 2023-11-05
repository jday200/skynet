const { error, log, log_start, log_stop } = require('../library/T200Lib.js');
const T200DBSetup = require('../library/db/T200DBSetup.js');
const T200Mariadb = require('../library/db/T200Mariadb.js');

log_start(__filename, "test_mariadb");

let setup = new T200DBSetup();
let mariadb = new T200Mariadb();

setup.database = "home";
setup.user = "home";
setup.password = "home123";

let result = false;

mariadb.start(setup).then(function(){
    log(__filename, "mariadb start success");

    return mariadb.connect().then(function(){
        log(__filename, "mariadb connect success");
        let sql = "select * from per1son";

        return mariadb.query(sql).then(function(data){
            log(__filename, "mariadb query success");
            result = true;
        }, function(err){
            log(__filename, "mariadb query failure");
            result = false;
        }).catch(function(){
            log(__filename, "mariadb query catch");
            result = false;
        }).finally(function(){

            return mariadb.disconnect();

        }).then(function(){
            log(__filename, "mariadb disconnect success");
        }, function(){
            log(__filename, "mariadb disconnect failure");
            result = false;
        }).catch(function(){
            log(__filename, "mariadb disconnect catch");
            result = false;
        });

    }, function(){
        log(__filename, "mariadb connect failure");
    }).catch(function(){
        log(__filename, "mariadb connect catch");
    }).finally(function(){

        return mariadb.stop()

    }).then(function(){
        log(__filename, "mariadb stop success");
    }, function(){
        log(__filename, "mariadb stop failure");
        result = false;
    }).catch(function(){
        log(__filename, "mariadb stop catch");
        result = false;
    });

}, function(){
    log(__filename, "mariadb start failure");
}).catch(function(){
    log(__filename, "mariadb start error");
}).finally(function(){
    if(result){
        log(__filename, "test mariadb success");
    }else{
        log(__filename, "test mariadb failure");
    }
});


log_stop(__filename, "test_mariadb");