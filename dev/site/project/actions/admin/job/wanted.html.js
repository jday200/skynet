const { error, log } = require('../../../../library/T200Lib.js');
const T200Error = require('../../../../library/T200Error.js');

const T200View = require('../../../../library/view/T200View.js');
const T200HttpsForm = require('../../../../library/net/T200HttpsForm.js');
const T200Job = require('../../../models/T200Job.js');
const T200HomeJob = require('../../../biz/T200HomeJob.js');

async function do_job_wanted_list(request, response, cookie, session, resource) {
    log(__filename, "do_job_wanted_list");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let job = new T200Job();
        let HomeJob = new T200HomeJob();

        if(HomeJob.verify_login(cookie, session)){
            if(true){
                job._table = "job_wanted";
                HomeJob.list(job.merge_select()).then(function(values){
                    let view = new T200View(resource);
                    let data = {};
                    data.jobs = values;
                    return view.render_file("admin/job/wanted.ejs", data).then(function(result){
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

global.action.use_post('/admin/job/wanted/list', do_job_wanted_list);

