const path = require('path');
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
        let name = T200Path.merge_root(file);
        let biz = require(name);
        let result;

        if(biz){
            result = biz;
        }else{
            result = false;
        }

        console.log(biz);
        console.log(result);
        return result;
    }

    load_file(file) {
        let name = T200Path.merge_root(file);
        return T200File.load(name);
    }

    merge_default(url) {
        let files = global.setup.http.index.split(',');
        let result = new Array();

        for(let id in files){
            let name = path.join(global.setup.http.home, url + files[id]);
            let real = T200Path.merge_root(name);
            result.push(name);
        }
        return result;
    }

    merge_action(url){
        let name = path.join(global.setup.http.actions, url + '.js');
        //let real = T200Path.merge_root(name);
        return name;
    }

    merge_html(url){
        let name = path.join(global.setup.http.home, url);
        //let real = T200Path.merge_root(name);
        return name;
    }

    merge_app() {
        let name = path.join(global.setup.http.actions, '/app.js');
        return name;
    }

    merge_pages(url){
        return path.join(global.setup.http.pages, "/" + url);
    }

}

module.exports = T200HttpResource;