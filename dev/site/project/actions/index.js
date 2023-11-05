const { error, log } = require('../../library/T200Lib.js');
const T200Error = require('../../library/T200Error.js');

const T200View = require('../../library/view/T200View.js');
const T200HomeIndex = require('../biz/T200HomeIndex.js');

async function do_index(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let view = new T200View(resource);
        let HomeIndex = new T200HomeIndex();

        return HomeIndex.load_index().then(function(data){
            console.log(data);
            return view.render_file('index.ejs', data);
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


module.exports = { do_index };