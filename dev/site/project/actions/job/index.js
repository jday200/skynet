const { error, log } = require('../../../library/T200Lib.js');
const T200Error = require('../../../library/T200Error.js');

const T200View = require('../../../library/view/T200View.js');
const T200HomeJob = require('../../biz/T200HomeJob.js');

async function do_job_index(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let view = new T200View(resource);
        let HomeJob = new T200HomeJob();

        return HomeJob.load_index().then(function(data){
            return view.render_file('job/index.ejs', data);
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


module.exports = { do_job_index };