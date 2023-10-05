
const T200Path = require('../../library/fs/T200Path.js');
const T200EJS = require('../../library/ejs/T200EJS.js');
const T200HttpResource = require('../../library/net/T200HttpResource.js');


function do_index(request, response, cookie, session) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        console.log('do_index');

        let EJS = new T200EJS();
        let resource = new T200HttpResource();

        let file = resource.merge_pages('body.ejs');
        let real = T200Path.merge_root(file);

        let data = {name : 'user'};

        console.log(real);

        EJS.render_file(real, data).then(function(result){
            resolve(result);
        }, function(){
            reject();
        });
    });

    return promise;
}

global.action.use_get('/index', do_index);