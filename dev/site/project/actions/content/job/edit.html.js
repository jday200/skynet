const { error, log } = require('../../../../library/T200Lib.js');
const T200Error = require('../../../../library/T200Error.js');

const T200HttpsForm = require('../../../../library/net/T200HttpsForm.js');
const T200Job = require('../../../models/T200Job.js');
const T200HomeJob = require('../../../biz/T200HomeJob.js');

async function do_job_edit(request, response, cookie, session, resource) {
    log(__filename, "do_edit");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let HomeJob = new T200HomeJob();

        if(HomeJob.verify_login(cookie, session)){
            let jid = cookie.get("jid");
            if(jid && 0 < jid){
                do_job_modify(request, response, cookie, session, resource);
            }else{
                do_job_add(request, response, cookie, session, resource).then(function(result){
                    response.type("json");
                    if(result){
                        resolve();
                    }else{
                        reject();
                    }
                }, function(){
                    reject();
                });
            }
        }else{
            reject();
        }
    });

    return promise;
}

async function do_job_add(request, response, cookie, session, resource) {
    log(__filename, "do_add");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let job = new T200Job();
        let HomeJob = new T200HomeJob();

        job.user_id = session.get("userid");
        job.title = request.get("title");
        job.content = request.get("content");
        
        if(T200HttpsForm.verify_id(job.user_id)
            && T200HttpsForm.verify_text(job.title)
            && T200HttpsForm.verify_text(job.content)){
                job._table = "job_recruit";
                job._values = job.values();
                HomeJob.add(job.merge_insert()).then(resolve, reject);
        }else{
            reject();
        }
    });

    return promise;
}

async function do_job_modify(request, response, cookie, session, resource) {
    log(__filename, "do_edit");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let HomeJob = new T200HomeJob();


    });

    return promise;
}


global.action.use_post('/content/job/edit', do_job_edit);

