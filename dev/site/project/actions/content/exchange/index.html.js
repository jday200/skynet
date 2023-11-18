const { error, log } = require('../../../../library/T200Lib.js');
const T200Error = require('../../../../library/T200Error.js');

const T200View = require('../../../../library/view/T200View.js');
const T200HttpsForm = require('../../../../library/net/T200HttpsForm.js');
const T200Exchange = require('../../../models/T200Exchange.js');
const T200HomeExchange = require('../../../biz/T200HomeExchange.js');

async function do_exchange_list(request, response, cookie, session, resource) {
    log(__filename, "do_exchange_list");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let exchange = new T200Exchange();
        let HomeExchange = new T200HomeExchange(request, cookie, session);

        if(HomeExchange.verify_login(cookie, session)){
            exchange.user_id = session.get("userid");
            if(T200HttpsForm.verify_id(exchange.user_id)){
                HomeExchange.paging(exchange, exchange.merge_paging_count(exchange.user_id), exchange.merge_paging(exchange.user_id)).then(function(obj){
                    let view = new T200View(resource);
                    let data = {};
                    data.paging = obj.paging;
                    data.exchanges = obj.values;
                    return view.render_file("content/exchange/index.ejs", data).then(function(result){
                        response.type("json");
                        resolve(result);
                    }, function(err){
                        reject();
                    });
                }, function(){
                    reject();
                });
            }else{
                reject();
            }
        }else{
            reject();
        }
    });

    return promise;
}


async function do_exchange_remove(request, response, cookie, session, resource) {
    log(__filename, "do_exchange_remove");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let exchange = new T200Exchange();
        let HomeExchange = new T200HomeExchange(request, cookie, session);

        if(HomeExchange.verify_login(cookie, session)){
            exchange.user_id = session.get("userid");
            exchange.ids = request.get("ids");
            if(T200HttpsForm.verify_id(exchange.user_id)
                && T200HttpsForm.verify_ids(exchange.ids)){
                HomeExchange.remove(exchange.merge_delete()).then(function(flag){
                    if(flag){
                        HomeExchange.paging(exchange, exchange.merge_paging_count(exchange.user_id), exchange.merge_paging(exchange.user_id)).then(function(obj){
                            let view = new T200View(resource);
                            let data = {};
                            data.paging = obj.paging;
                            data.exchanges = obj.values;
                            return view.render_file("content/exchange/index.ejs", data).then(function(result){
                                response.type("json");
                                resolve(result);
                            }, function(){
                                reject();
                            });
                        }, function(){
                            reject();
                        });
                    }else{

                    }
                }, function(){

                });

            }else{
                reject();
            }
        }else{
            reject();
        }
    });

    return promise;
}

global.action.use_post('/content/exchange/list', do_exchange_list);
global.action.use_post('/content/exchange/remove', do_exchange_remove);

