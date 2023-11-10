const { error, log } = require('../../../../library/T200Lib.js');
const T200Error = require('../../../../library/T200Error.js');

const T200HttpsForm = require('../../../../library/net/T200HttpsForm.js');
const T200Exchange = require('../../../models/T200Exchange.js');
const T200HomeExchange = require('../../../biz/T200HomeExchange.js');

async function do_exchange_edit(request, response, cookie, session, resource) {
    log(__filename, "do_edit");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let HomeExchange = new T200HomeExchange();

        if(HomeExchange.verify_login(cookie, session)){
            let eid = cookie.get("eid");
            if(eid && 0 < eid){
                do_exchange_modify(request, response, cookie, session, resource);
            }else{
                do_exchange_add(request, response, cookie, session, resource).then(function(result){
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

async function do_exchange_add(request, response, cookie, session, resource) {
    log(__filename, "do_edit");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let exchange = new T200Exchange();
        let HomeExchange = new T200HomeExchange();

        exchange.user_id = session.get("userid");
        exchange.title = request.get("title");
        exchange.content = request.get("content");
        
        if(T200HttpsForm.verify_id(exchange.user_id)
            && T200HttpsForm.verify_text(exchange.title)
            && T200HttpsForm.verify_text(exchange.content)){
                exchange._values = exchange.values();
                HomeExchange.add(exchange.merge_insert()).then(resolve, reject);
        }else{
            reject();
        }
    });

    return promise;
}

async function do_exchange_modify(request, response, cookie, session, resource) {
    log(__filename, "do_edit");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let HomeExchange = new T200HomeExchange();


    });

    return promise;
}


global.action.use_post('/content/exchange/edit', do_exchange_edit);

