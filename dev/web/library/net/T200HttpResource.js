const fs = require('fs');
const path = require('path');

class T200HttpResource {
    constructor() {

    }

    exists(file, callback) {
        fs.access(file, fs.constants.F_OK, callback);
    }

    merge_default(url) {
        console.log(global.setup.http.index);
        let files = global.setup.http.index.split(',');
        let result = new Array();

        console.log(url);
        console.log(files);

        for(let id in files){
            let name = path.join(global.setup.http.home, url + files[id]);
            let real = path.join(__dirname, name);
            console.log(real);
            result.push(real);
        }
        return result;
    }

    merge_action(url) {
        let name = path.join(global.setup.http.actions, url + '.js');
        let real = path.join(__dirname, name);
        return real;
    }

    merge_html(url) {
        let name = path.join(global.setup.http.home, url);
        let real = path.join(__dirname, name);
        return real;
    }

    load_action(file, callback) {
        console.log(file);
        let result = require(file);
        if(result)result;

        if(callback)callback();
    }

    load_file(file, callback) {
        console.log(file);
        fs.readFile(file, callback);
    }
}

module.exports = T200HttpResource;