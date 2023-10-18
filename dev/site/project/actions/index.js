const { log, log_start, log_stop } = require('../../library/lib.js');


function do_index(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        log(__filename, "do_index");
    });

    return promise;
}

module.exports = { do_index };