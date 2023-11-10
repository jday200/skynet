const { error, log } = require('../../../../library/T200Lib.js');
const T200Error = require('../../../../library/T200Error.js');

const T200HttpsForm = require('../../../../library/net/T200HttpsForm.js');
const T200Note = require('../../../models/T200Note.js');
const T200HomeNote = require('../../../biz/T200HomeNote.js');

async function do_note_edit(request, response, cookie, session, resource) {
    log(__filename, "do_edit");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let HomeNote = new T200HomeNote();

        if(HomeNote.verify_login(cookie, session)){
            let nid = cookie.get("nid");
            if(nid && 0 < nid){
                do_note_modify(request, response, cookie, session, resource);
            }else{
                do_note_add(request, response, cookie, session, resource).then(function(result){
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

async function do_note_add(request, response, cookie, session, resource) {
    log(__filename, "do_edit");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let note = new T200Note();
        let HomeNote = new T200HomeNote();

        note.user_id = session.get("userid");
        note.title = request.get("title");
        note.content = request.get("content");
        
        if(T200HttpsForm.verify_id(note.user_id)
            && T200HttpsForm.verify_text(note.title)
            && T200HttpsForm.verify_text(note.content)){
                note._values = note.values();
                HomeNote.add(note.merge_insert()).then(resolve, reject);
        }else{
            reject();
        }
    });

    return promise;
}

async function do_note_modify(request, response, cookie, session, resource) {
    log(__filename, "do_edit");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let HomeNote = new T200HomeNote();


    });

    return promise;
}


global.action.use_post('/content/note/edit', do_note_edit);

