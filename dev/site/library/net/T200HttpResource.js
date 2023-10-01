const T200File = require('../fs/T200File.js');
const T200Path = require('../fs/T200Path.js');

class T200HttpResource {
    constructor() {

    }

    exists(file) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let real = T200Path.merge_root(file);
            T200File.exists(real).then(resolve, reject);
        });

        return promise;
    }

    load_action(file) {
        let result = require(file);
        if(result)result;
    }

    load_file(file) {
        return T200File.load(file);
    }

    merge_default(url) {
        let files = global.setup.http.index.split(',');
        let result = new Array();

        for(let id in files){
            let name = path.join(global.setup.http.home, url + files[id]);
            let real = T200Path.merge_root(name);
            result.push(real);
        }
        return result;
    }

    merge_action(url){
        let name = path.join(global.setup.http.actions, url + '.js');
        let real = T200Path.merge_root(name);
        return real;
    }

    merge_html(url){
        let name = path.join(global.setup.http.home, url);
        let real = T200Path.merge_root(name);
        return real;
    }

}

module.exports = T200HttpResource;