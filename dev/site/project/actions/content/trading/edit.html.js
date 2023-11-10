const { error, log } = require('../../../../library/T200Lib.js');
const T200Error = require('../../../../library/T200Error.js');

const T200HttpsForm = require('../../../../library/net/T200HttpsForm.js');
const T200Trading = require('../../../models/T200Trading.js');
const T200HomeTrading = require('../../../biz/T200HomeTrading.js');

async function do_trading_edit(request, response, cookie, session, resource) {
    log(__filename, "do_edit");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let HomeTrading = new T200HomeTrading();

        if(HomeTrading.verify_login(cookie, session)){
            let tid = cookie.get("tid");
            if(tid && 0 < tid){
                do_trading_modify(request, response, cookie, session, resource);
            }else{
                do_trading_add(request, response, cookie, session, resource).then(function(result){
                    response.type("json");
                    if(result){
                        resolve();
                    }else{
                        reject();
                    }
                }, function(){
                    reject();
                });
            }
        }else{
            reject();
        }
    });

    return promise;
}

async function do_trading_add(request, response, cookie, session, resource) {
    log(__filename, "do_add");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let trading = new T200Trading();
        let HomeTrading = new T200HomeTrading();

        trading.user_id = session.get("userid");
        trading.title = request.get("title");
        trading.content = request.get("content");
        
        if(T200HttpsForm.verify_id(trading.user_id)
            && T200HttpsForm.verify_text(trading.title)
            && T200HttpsForm.verify_text(trading.content)){
                trading._table = "trading_sell";
                trading._values = trading.values();
                HomeTrading.add(trading.merge_insert()).then(resolve, reject);
        }else{
            reject();
        }
    });

    return promise;
}

async function do_trading_modify(request, response, cookie, session, resource) {
    log(__filename, "do_edit");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let HomeTrading = new T200HomeTrading();


    });

    return promise;
}


global.action.use_post('/content/trading/edit', do_trading_edit);

