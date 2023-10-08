const ejs = require('ejs');

class T200EJS {
    constructor() {

    }

    render() {

    }

    render_file(file, data) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            ejs.renderFile(file, data, function(err, result){
                if(err){
                    if(reject)reject(err);
                }else{
                    if(resolve)resolve(result);
                }
            });
        });

        return promise;
    }
}

module.exports = T200EJS;