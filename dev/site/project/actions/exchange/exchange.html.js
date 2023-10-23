const { log, log_start, log_stop } = require('../../../library/lib.js');

const T200Exchange = require('../../models/T200Exchange.js');
const T200HomeExchange = require('../../biz/T200HomeExchange.js');


function do_edit_exchange(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        log(__filename, "do_edit_exchange");

        let exchange = new T200Exchange();
        let HomeExchange = new T200HomeExchange();

        try{
            let exchange_id = request.value("exchange_id");

            if(0 < exchange_id){
                exchange.exchange_id = exchange_id;
            }

            exchange.user_id = session.get("userid");
            exchange.content = request.value('content');
        }catch(err){
            throw(err);
        }

        if(0 < exchange.exchange_id){
            HomeExchange.modify(exchange).then(function(){
                response.type('json');
                response.data("success");
                resolve();
            }, function(err){
                response.type("json");
                reject();
            });
        }else{
            HomeExchange.add(exchange).then(function(){
                response.type('json');
                response.data("success");
                resolve();
            }, function(err){
                response.type("json");
                reject();
            });
        }

    });

    return promise;
}


function do_get_exchange(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        log(__filename, "do_get_exchange");

        let exchange = new T200Exchange();
        let HomeExchange = new T200HomeExchange();

        try{
            let exchange_id = cookie.get('eid');

            if(!exchange_id){
                throw("exchange id is null");
            }

            exchange.exchange_id = exchange_id;

        }catch(err){
            throw(err);
        }

        HomeExchange.get(exchange).then(function(data){
            response.type('json');
            response.data(data);
            resolve();
        }, function(err){
            response.type("json");
            response.data("failure");
            reject();
        });

    });

    return promise;
}


global.action.use_post('/exchange/edit_exchange', do_edit_exchange);
global.action.use_post('/exchange/get_exchange', do_get_exchange);