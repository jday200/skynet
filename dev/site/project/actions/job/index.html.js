const { log, log_start, log_stop } = require('../../../library/lib.js');

const T200Path = require('../../../library/fs/T200Path.js');
const T200EJS = require('../../../library/T200EJS.js');

const T200Job = require('../../models/T200Job.js');
const T200HomeJob = require('../../biz/T200HomeJob.js');


function do_jobs(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        log(__filename, "do_jobs");

        let EJS = new T200EJS();
        let file = resource.merge_pages('job/jobs.ejs');
        let real = T200Path.join_root(file);

        let data = {};

        data.user_id = session.get('userid');

        get_jobs(data.user_id).then(function(jobs){
            data.jobs = jobs;
            return EJS.render_file(real, data);
        }, function(err){
            console.log(err);
            return error();
        }).then(function(data){
            response.type('json');
            response.data(data);
            resolve();
        }, function(err){
            response.type('json');
            console.log(err);
            reject();
        });
    });

    return promise;
}

function get_jobs(userid) {
    log(__filename, "get_jobs", userid);
    
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let job = new T200Job();
        let HomeJob = new T200HomeJob();

        job.user_id = userid;

        HomeJob.list(job).then(resolve, reject);
    });

    return promise;
}


function do_remove_jobs(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        log(__filename, "do_remove_jobs");

        let data = {};

        data.user_id = session.get('userid');

        let ids = request.value('ids');

        remove_jobs(ids).then(function(){
            response.type('json');
            response.data("success");
            resolve();
        }, function(err){
            response.type('json');
            reject();
        });
    });

    return promise;
}

function remove_jobs(ids) {
    log(__filename, "remove_jobs", ids);
    
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let job = new T200Job();
        let HomeJob = new T200HomeJob();

        job.job_id = ids;

        HomeJob.remove_all(job).then(resolve, reject);
    });

    return promise;
}

global.action.use_post('/job/jobs', do_jobs);
global.action.use_post('/job/remove_jobs', do_remove_jobs);