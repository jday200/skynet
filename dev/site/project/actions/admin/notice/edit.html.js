const { error, log } = require('../../../../library/T200Lib.js');
const T200Error = require('../../../../library/T200Error.js');

const T200HttpsForm = require('../../../../library/net/T200HttpsForm.js');
const T200Notice = require('../../../models/T200Notice.js');
const T200HomeNotice = require('../../../biz/T200HomeNotice.js');

async function do_notice_edit(request, response, cookie, session, resource) {
    log(__filename, "do_notice_edit");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let HomeNotice = new T200HomeNotice();

        if(HomeNotice.verify_login(cookie, session)){
            let nid = cookie.get("nid");
            if(nid && 0 < nid){
                do_notice_modify(request, response, cookie, session, resource);
            }else{
                do_notice_add(request, response, cookie, session, resource).then(function(result){
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

async function do_notice_add(request, response, cookie, session, resource) {
    log(__filename, "do_notice_add");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let notice = new T200Notice();
        let HomeNotice = new T200HomeNotice();

        notice.user_id = session.get("userid");
        notice.title = request.get("title");
        notice.content = request.get("content");
        
        if(T200HttpsForm.verify_id(notice.user_id)
            && T200HttpsForm.verify_text(notice.title)
            && T200HttpsForm.verify_text(notice.content)){
                notice._values = notice.values();
                HomeNotice.add(notice.merge_insert()).then(resolve, reject);
        }else{
            reject();
        }
    });

    return promise;
}

async function do_notice_modify(request, response, cookie, session, resource) {
    log(__filename, "do_notice_modify");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let HomeNotice = new T200HomeNotice();


    });

    return promise;
}


global.action.use_post('/admin/notice/edit', do_notice_edit);

