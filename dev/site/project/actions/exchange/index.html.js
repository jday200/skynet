const { log, log_start, log_stop } = require('../../../library/lib.js');

const T200Path = require('../../../library/fs/T200Path.js');
const T200EJS = require('../../../library/T200EJS.js');

const T200Exchange = require('../../models/T200Exchange.js');
const T200HomeExchange = require('../../biz/T200HomeExchange.js');


function do_exchanges(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        log(__filename, "do_exchanges");

        let EJS = new T200EJS();
        let file = resource.merge_pages('exchange/exchanges.ejs');
        let real = T200Path.join_root(file);

        let data = {};

        data.userid = session.get('userid');

        get_exchanges(data.userid).then(function(exchanges){
            data.exchanges = exchanges;
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

function get_exchanges(userid) {
    log(__filename, "get_exchanges", userid);
    
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let exchange = new T200Exchange();
        let HomeExchange = new T200HomeExchange();

        exchange.userid = userid;

        HomeExchange.list(exchange).then(resolve, reject);
    });

    return promise;
}


function do_remove_exchanges(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        log(__filename, "do_remove_exchanges");

        let data = {};

        data.userid = session.get('userid');

        let ids = request.value('ids');

        remove_exchanges(ids).then(function(){
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

function remove_exchanges(ids) {
    log(__filename, "remove_exchanges", ids);
    
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let exchange = new T200Exchange();
        let HomeExchange = new T200HomeExchange();

        exchange.exchange_id = ids;

        HomeExchange.remove_all(exchange).then(resolve, reject);
    });

    return promise;
}

global.action.use_post('/exchange/exchanges', do_exchanges);
global.action.use_post('/exchange/remove_exchanges', do_remove_exchanges);