const path = require('path');
const T200FIle = require('../fs/T200File.js');
const T200Path = require('../fs/T200Path.js');


class T200HttpsResource {
    constructor() {

    }

    exists(file) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let real = T200Path.join_root(file);
            T200File.exists(real).then(resolve, reject);
        });

        return promise;
    }

    load_action(file) {
        let name = T200Path.join_root(file);
        let biz = require(name);
        let result;

        if(biz){
            result = true;
        }else{
            result = false;
        }

        return result;
    }

    load_file(file) {
        let real = T200Path.join_root(file);
        return T200File.load(real);
    }

    merge_default(url) {
        let files = global.setup.http.index.split(',');
        let result = new Array();

        for(let id in files){
            let name = path.join(global.setup.http.home, url + files[id]);
            result.push(name);
        }

        return result;
    }

    merge_action(url) {
        let name = path.join(global.setup.http.actions, url + '.js');
        return name;
    }

    merge_html(url) {
        let name = path.join(global.setup.http.home, url);
        return name;
    }

    merge_app() {
        let name = path.join(global.setup.http.actions, '/app.js');
        return name;
    }

    merge_pages(url) {
        let name = path.join(global.setup.http.pages, "/" + url);
        return name;
    }
}

module.exports = T200HttpsResource;