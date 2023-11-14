const { error, log } = require('../../../library/T200Lib.js');
const T200Error = require('../../../library/T200Error.js');

const T200View = require('../../../library/view/T200View.js');
const T200HttpsForm = require('../../../library/net/T200HttpsForm.js');
const T200Exchange = require('../../models/T200Exchange.js');
const T200HomeExchange = require('../../biz/T200HomeExchange.js');

async function do_exchange_list(request, response, cookie, session, resource) {
    log(__filename, "do_exchange_list");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let exchange = new T200Exchange();
        let HomeExchange = new T200HomeExchange();

        if(HomeExchange.verify_login(cookie, session)){
            exchange.user_id = session.get("userid");
            let id = cookie.get("eid");
            if(T200HttpsForm.verify_id(id._value)){
                exchange._table = "exchange";
                HomeExchange.list(exchange.merget_forum_list(id._value)).then(function(values){
                    let view = new T200View(resource);
                    let data = {};
                    data.exchanges = values;
                    return view.render_file("exchange/exchange.ejs", data).then(function(result){
                        response.type("json");
                        resolve(result);
                    }, function(){
                        reject();
                    });
                }, function(err){
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

global.action.use_post('/exchange/list', do_exchange_list);

