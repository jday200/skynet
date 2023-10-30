const T200Error = require('../library/T200Error.js');
const { error, log, log_start, log_stop } = require('../library/lib.js');

log_start(__filename, "test promise");

new Promise(function(resolve, reject){
    setTimeout(function(){
        log(__filename, "run1");
        new Promise(function(resolve, reject){
            setTimeout(function(){
                log(__filename, "run2");
                new Promise(function(resolve, reject){
                    setTimeout(function(){
                        log(__filename, "run3");
                        resolve();
                    }, 1000);
                }).then(resolve);
            }, 1000);
        }).then(function(){
            resolve();
        }, function(){

        });

        new Promise(function(resolve, reject){
            setTimeout(function(){
                log(__filename, "run4");
                new Promise(function(resolve, reject){
                    setTimeout(function(){
                        log(__filename, "run5");
                        resolve();
                    }, 1000);
                }).then(resolve);
            }, 1000);
        }).then(resolve);
    }, 1000);
}).then(function(){
    log(__filename, "test success");
}, function(){
    log(__filename, "test failure");
});

log_stop(__filename, "test promise");