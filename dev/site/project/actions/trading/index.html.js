const { log, log_start, log_stop } = require('../../../library/lib.js');

const T200Path = require('../../../library/fs/T200Path.js');
const T200EJS = require('../../../library/T200EJS.js');

const T200Trading = require('../../models/T200Trading.js');
const T200HomeTrading = require('../../biz/T200HomeTrading.js');


function do_tradings(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        log(__filename, "do_tradings");

        let EJS = new T200EJS();
        let file = resource.merge_pages('trading/tradings.ejs');
        let real = T200Path.join_root(file);

        let data = {};

        data.user_id = session.get('userid');

        get_tradings(data.user_id).then(function(tradings){
            data.tradings = tradings;
            return EJS.render_file(real, data);
        }, function(err){
            console.log(err);
            return error();
        }).then(function(data){
            response.type('json');
            response.data(data);
            resolve();
        }, function(err){
            response.type('json');
            console.log(err);
            reject();
        });
    });

    return promise;
}

function get_tradings(userid) {
    log(__filename, "get_tradings", userid);
    
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let trading = new T200Trading();
        let HomeTrading = new T200HomeTrading();

        trading.user_id = userid;

        HomeTrading.list(trading).then(resolve, reject);
    });

    return promise;
}


function do_remove_tradings(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        log(__filename, "do_remove_tradings");

        let data = {};

        data.user_id = session.get('userid');

        let ids = request.value('ids');

        remove_tradings(ids).then(function(){
            response.type('json');
            response.data("success");
            resolve();
        }, function(err){
            response.type('json');
            reject();
        });
    });

    return promise;
}

function remove_tradings(ids) {
    log(__filename, "remove_tradings", ids);
    
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let trading = new T200Trading();
        let HomeTrading = new T200HomeTrading();

        trading.trading_id = ids;

        HomeTrading.remove_all(trading).then(resolve, reject);
    });

    return promise;
}

global.action.use_post('/trading/tradings', do_tradings);
global.action.use_post('/trading/remove_tradings', do_remove_tradings);