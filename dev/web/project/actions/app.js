
function do_index(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        console.log('do_index');

        let EJS = new T200EJS();
        let file = resource.merge_pages('body.ejs');
        let real = T200Path.join_root(file);

        let data = {};

        data.name = session.get('name');

        EJS.render_file(real, data).then(function(result){
            resolve(result);
        }, function(err){
            reject(err);
        });
    });

    return promise;
}

global.cancelAnimationFrame.use_get('/', do_index);