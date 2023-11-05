const { error, log, log_start, log_stop } = require('../library/T200Lib.js');

async function start() {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        resolve(true);
    });

    return promise;
}

async function stop() {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        resolve(true);
    });

    return promise;
}

async function connect() {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        resolve(true);
    });

    return promise;
}

async function disconnect() {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        resolve(true);
    });

    return promise;
}

async function query() {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        //throw 1;
        resolve(true);
        //reject(false);
        
    });

    return promise;
}



log_start(__filename, "test_promise");

let result = false;

start().then(function(){
    log(__filename, "start success");

    return connect().then(function(){
        log(__filename, "connect success");

        return query().then(function(){
            log(__filename, "query success");
            result = true;
        }, function(){
            log(__filename, "query failure");
            result = false;
        }).catch(function(){
            log(__filename, "query catch");
            result = false;
        }).finally(function(){

            return disconnect();

        }).then(function(){
            log(__filename, "disconnect success");
        }, function(){
            log(__filename, "disconnect failure");
            result = false;
        }).catch(function(){
            log(__filename, "disconnect catch");
            result = false;
        });

    }, function(){
        log(__filename, "connect failure");
    }).catch(function(){
        log(__filename, "connect catch");
    }).finally(function(){

        return stop()

    }).then(function(){
        log(__filename, "stop success");
    }, function(){
        log(__filename, "stop failure");
        result = false;
    }).catch(function(){
        log(__filename, "stop catch");
        result = false;
    });

}, function(){
    log(__filename, "start failure");
}).catch(function(){
    log(__filename, "start catch");
}).finally(function(){
    if(result){
        log(__filename, "test promise success");
    }else{
        log(__filename, "test promise failure");
    }
});

log_stop(__filename, "test_promise");