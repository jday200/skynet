const { error, log } = require('../../../library/T200Lib.js');
const T200Error = require('../../../library/T200Error.js');

const T200HttpsForm = require('../../../library/net/T200HttpsForm.js');
const T200View = require('../../../library/view/T200View.js');
const T200HomeRegion = require('../../biz/T200HomeRegion.js');

async function do_region_index(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let view = new T200View(resource);
        let HomeRegion = new T200HomeRegion();

        return HomeRegion.load_index().then(function(data){
            return view.render_file('region/region.ejs', data);
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


async function do_city_index(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let view = new T200View(resource);
        let HomeRegion = new T200HomeRegion();

        let id = request.get("id");
        if(T200HttpsForm.verify_id(id)){
            return HomeRegion.load_city_index(id).then(function(data){
                return view.render_file('region/city.ejs', data);
            }, function(){
                return error();
            }).then(function(result){
                response.success(result);
                resolve(result);
            }, function(err){
                reject(err);
                return error();
            });
        }else{
            reject();
            return error();
        }
        
    });

    return promise;
}


module.exports = { do_region_index, do_city_index };