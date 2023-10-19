const { log, log_start, log_stop } = require('./lib.js');
const ejs = require('ejs');

class T200EJS {
    constructor() {

    }

    render_file(file, data) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            log(__filename, "render_file", file);
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