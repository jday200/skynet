const { error, log } = require('../../../../library/T200Lib.js');
const T200Error = require('../../../../library/T200Error.js');

const T200View = require('../../../../library/view/T200View.js');
const T200HttpsForm = require('../../../../library/net/T200HttpsForm.js');
const T200Note = require('../../../models/T200Note.js');
const T200HomeNote = require('../../../biz/T200HomeNote.js');

async function do_note_list(request, response, cookie, session, resource) {
    log(__filename, "do_note_list");
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let note = new T200Note();
        let HomeNote = new T200HomeNote();

        if(HomeNote.verify_login(cookie, session)){
            note.user_id = session.get("userid");
            if(T200HttpsForm.verify_id(note.user_id)){
                HomeNote.list(note.merge_select_by_id(note.user_id)).then(function(values){
                    let view = new T200View(resource);
                    let data = {};
                    data.notes = values;
                    return view.render_file("admin/note/index.ejs", data).then(function(result){
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

global.action.use_post('/admin/note/list', do_note_list);

