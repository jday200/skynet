const { error, log } = require('../../../library/T200Lib.js');
const T200Error = require('../../../library/T200Error.js');

const T200View = require('../../../library/view/T200View.js');
const T200HomeExchange = require('../../biz/T200HomeExchange.js');

async function do_exchange_index(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let view = new T200View(resource);
        let HomeExchange = new T200HomeExchange();

        return HomeExchange.load_index().then(function(data){
            return view.render_file('exchange/index.ejs', data);
        }, function(){
            return error();
        }).then(function(result){
            response.success(result);
            resolve(result);
        }, function(err){
            reject(err);
            return error();
        });

    });

    return promise;
}


module.exports = { do_exchange_index };