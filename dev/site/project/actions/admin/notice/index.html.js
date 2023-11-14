const { error, log } = require('../../../../library/T200Lib.js');
const T200Error = require('../../../../library/T200Error.js');

const T200View = require('../../../../library/view/T200View.js');
const T200HttpsForm = require('../../../../library/net/T200HttpsForm.js');
const T200Notice = require('../../../models/T200Notice.js');
const T200HomeNotice = require('../../../biz/T200HomeNotice.js');

async function do_notice_list(request, response, cookie, session, resource) {
    log(__filename, "do_notice_list");
    let self = this;
    let promise = new Promise(function (resolve, reject) {
        let notice = new T200Notice();
        let HomeNotice = new T200HomeNotice();

        HomeNotice.list(notice.merge_select()).then(function (values) {
            let view = new T200View(resource);
            let data = {};
            data.notices = values;
            return view.render_file("admin/notice/index.ejs", data).then(function (result) {
                response.type("json");
                resolve(result);
            }, function () {
                reject();
            });
        }, function (err) {
            reject();
        });

    });

    return promise;
}

global.action.use_post('/admin/notice/list', do_notice_list);

