const fs = require('fs');

class T200File {
    constructor() {

    }

    static exists(file) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            console.log(file);
            fs.access(file, fs.constants.F_OK, function(err){
                if(err){
                    if(reject)reject(err);
                }else{
                    if(resolve)resolve();
                }
            });
        });

        return promise;
    }

    static load(file) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            fs.readFile(file, function(err, data){
                console.log(err);
                if(err){
                    console.log(err);
                    if(reject)reject(err);
                }else{
                    if(resolve)resolve(data);
                }
            })
        });

        return promise;
    }
}

module.exports = T200File;
