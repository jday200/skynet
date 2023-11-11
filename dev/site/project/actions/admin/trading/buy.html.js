const { error, log } = require('../../../../library/T200Lib.js');
const T200Error = require('../../../../library/T200Error.js');

const T200View = require('../../../../library/view/T200View.js');
const T200HttpsForm = require('../../../../library/net/T200HttpsForm.js');
const T200Trading = require('../../../models/T200Trading.js');
const T200HomeTrading = require('../../../biz/T200HomeTrading.js');

async function do_trading_buy_list(request, response, cookie, session, resource) {
    log(__filename, "do_trading_buy_list");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let trading = new T200Trading();
        let HomeTrading = new T200HomeTrading();

        if(HomeTrading.verify_login(cookie, session)){
            if(true){
                trading._table = "trading_buy";
                HomeTrading.list(trading.merge_select()).then(function(values){
                    let view = new T200View(resource);
                    let data = {};
                    data.tradings = values;
                    return view.render_file("admin/trading/buy.ejs", data).then(function(result){
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

global.action.use_post('/admin/trading/buy/list', do_trading_buy_list);

