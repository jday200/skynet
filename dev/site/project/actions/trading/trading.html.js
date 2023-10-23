const { log, log_start, log_stop } = require('../../../library/lib.js');

const T200Trading = require('../../models/T200Trading.js');
const T200HomeTrading = require('../../biz/T200HomeTrading.js');


function do_edit_trading(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        log(__filename, "do_edit_trading");

        let trading = new T200Trading();
        let HomeTrading = new T200HomeTrading();

        try{
            let trading_id = request.value("trading_id");

            if(0 < trading_id){
                trading.trading_id = trading_id;
            }

            trading.user_id = session.get("userid");
            trading.content = request.value('content');
        }catch(err){
            throw(err);
        }

        if(0 < trading.trading_id){
            HomeTrading.modify(trading).then(function(){
                response.type('json');
                response.data("success");
                resolve();
            }, function(err){
                response.type("json");
                reject();
            });
        }else{
            HomeTrading.add(trading).then(function(){
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


function do_get_trading(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        log(__filename, "do_get_trading");

        let trading = new T200Trading();
        let HomeTrading = new T200HomeTrading();

        try{
            let trading_id = cookie.get('did');

            if(!trading_id){
                throw("trading id is null");
            }

            trading.trading_id = trading_id;

        }catch(err){
            throw(err);
        }

        HomeTrading.get(trading).then(function(data){
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


global.action.use_post('/trading/edit_trading', do_edit_trading);
global.action.use_post('/trading/get_trading', do_get_trading);