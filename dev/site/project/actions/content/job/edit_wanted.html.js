const { error, log } = require('../../../../library/T200Lib.js');
const T200Error = require('../../../../library/T200Error.js');

const T200HttpsForm = require('../../../../library/net/T200HttpsForm.js');
const T200Job = require('../../../models/T200Job.js');
const T200HomeJob = require('../../../biz/T200HomeJob.js');

const T200Person = require('../../../models/T200Person.js');
const T200HomePerson = require('../../../biz/T200HomePerson.js');

async function do_job_wanted_edit(request, response, cookie, session, resource) {
    log(__filename, "do_edit");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let HomeJob = new T200HomeJob();

        if(HomeJob.verify_login(cookie, session)){
            let jid = cookie.get("jid");
            if(jid && 0 < jid){
                do_job_wanted_modify(request, response, cookie, session, resource);
            }else{
                do_job_wanted_add(request, response, cookie, session, resource).then(function(result){
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

async function do_job_wanted_add(request, response, cookie, session, resource) {
    log(__filename, "do_add");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let job = new T200Job();
        let HomeJob = new T200HomeJob();

        job.user_id = session.get("userid");
        job.city_id = request.get("city_id");
        job.title = request.get("title");
        job.content = request.get("content");
        
        if(T200HttpsForm.verify_id(job.user_id)
            && T200HttpsForm.verify_id(job.city_id)
            && T200HttpsForm.verify_text(job.title)
            && T200HttpsForm.verify_text(job.content)){
                job._table = "job_wanted";
                job._values = job.values();
                HomeJob.add(job.merge_insert()).then(resolve, reject);
        }else{
            reject();
        }
    });

    return promise;
}

async function do_job_wanted_modify(request, response, cookie, session, resource) {
    log(__filename, "do_edit");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let HomeJob = new T200HomeJob();


    });

    return promise;
}


async function do_house_region(request, response, cookie, session, resource) {
    log(__filename, "do_house_region");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let HomePerson = new T200HomePerson();

        if(HomePerson.verify_login(cookie, session)){
            let user_id = session.get("userid");

            if(T200HttpsForm.verify_id(user_id)){
                let user = new T200Person();
                HomePerson.load(user.merge_region(user_id)).then(function(data){
                    response.type("json");
                    resolve(data);
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

global.action.use_post('/content/job/wanted/edit', do_job_wanted_edit);
global.action.use_post('/content/house/region', do_house_region);

