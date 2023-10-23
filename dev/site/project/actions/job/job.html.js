const { log, log_start, log_stop } = require('../../../library/lib.js');

const T200Job = require('../../models/T200Job.js');
const T200HomeJob = require('../../biz/T200HomeJob.js');


function do_edit_job(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        log(__filename, "do_edit_job");

        let job = new T200Job();
        let HomeJob = new T200HomeJob();

        try{
            let job_id = request.value("job_id");

            if(0 < job_id){
                job.job_id = job_id;
            }

            job.user_id = session.get("userid");
            job.content = request.value('content');
        }catch(err){
            throw(err);
        }

        if(0 < job.job_id){
            HomeJob.modify(job).then(function(){
                response.type('json');
                response.data("success");
                resolve();
            }, function(err){
                response.type("json");
                reject();
            });
        }else{
            HomeJob.add(job).then(function(){
                response.type('json');
                response.data("success");
                resolve();
            }, function(err){
                response.type("json");
                reject();
            });
        }

    });

    return promise;
}


function do_get_job(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        log(__filename, "do_get_job");

        let job = new T200Job();
        let HomeJob = new T200HomeJob();

        try{
            let job_id = cookie.get('jid');

            if(!job_id){
                throw("job id is null");
            }

            job.job_id = job_id;

        }catch(err){
            throw(err);
        }

        HomeJob.get(job).then(function(data){
            response.type('json');
            response.data(data);
            resolve();
        }, function(err){
            response.type("json");
            response.data("failure");
            reject();
        });

    });

    return promise;
}


global.action.use_post('/job/edit_job', do_edit_job);
global.action.use_post('/job/get_job', do_get_job);