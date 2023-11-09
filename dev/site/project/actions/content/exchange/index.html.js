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
        let HomeExchange = new T200HomeExchange();
        debugger;
        if(HomeExchange.verify_login(cookie, session)){
            exchange.user_id = session.get("userid");
            if(T200HttpsForm.verify_id(exchange.user_id)){
                HomeExchange.list(exchange.merge_select_by_id(exchange.user_id)).then(function(data){
                    let view = new T200View(resource);
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
                reject();
            }
        }else{
            reject();
        }
    });

    return promise;
}

global.action.use_post('/content/exchange/list', do_exchange_list);

