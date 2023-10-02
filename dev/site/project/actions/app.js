
function do_index(request, response, cookie, session) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        console.log('do_index');
    });

    return promise;
}

global.action.use_get('/index', do_index);