const T200Error = require('../T200Error.js');
const fs = require('fs');
const path = require('path');


class T200Path {
    constructor() {

    }

    static dir1(file) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            fs.lstat(file, function(err, stats){
                if(err){
                    reject(err);
                }else{
                    if(stats.isDirectory){
                        resolve();
                    }else{
                        reject();
                    }
                }
            });
        });

        return promise;
    }

    static join_root(file) {
        let name = "../../" + file;
        return path.join(__dirname, name);
    }
}

module.exports = T200Path;

