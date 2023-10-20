const { log, log_start, log_stop } = require('../lib.js');
const url = require('url');

const T200HttpsRequest = require('./T200HttpsRequest.js');
const T200HttpsResponse = require('./T200HttpsResponse.js');
const T200HttpsCookie = require('./T200HttpsCookie.js');
const T200HttpsSession = require('./T200HttpsSession.js');
const T200HttpsResource = require('./T200HttpsResource.js');


class T200HttpsDispatcher {
    constructor() {

    }

    run(req, res) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            self.request = new T200HttpsRequest(req);

            self.request.load(function(data){
                log(__filename, "request load", JSON.stringify(data));
            
                self.response = new T200HttpsResponse(res);
                self.cookie = new T200HttpsCookie(req, res);
                self.session = new T200HttpsSession(self.cookie);
                
                self.dispense(req).then(function(){
                    log(__filename, "dispense success");
                    self.response.SEND_END();
                    if(resolve)resolve();
                }, function(){
                    log(__filename, "dispense failure");
                    self.response.SEND_END();
                    if(resolve)resolve();
                }).catch(function(err){
                    log(__filename, "dispense error", err);
                    self.response.SEND_500();
                    if(reject)reject();
                });
            });
        });

        return promise;
    }

    dispense(req) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let data = url.parse(req.url, true);
            let flag = '/';

            if(!data.path.endsWith('/')){
                flag = req.method;
            }

            log(__filename, "dispense", flag);

            switch(flag){
                case '/':
                    self.assign_index(data.path).then(resolve, reject);
                    break;
                case 'GET':
                    self.assign_get(data.path).then(resolve, reject);
                    break;
                case 'POST':
                    self.assign_post(data.path).then(resolve, reject);
                    break;
            }
        });

        return promise;
    }

    assign_index(action) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            log(__filename, "assign_index", action);

            let done = global.action.get[action];

            if(done){
                done(self.request, self.response, self.cookie, self.session, self.resource).then(function(){
                    resolve();
                }, function(err){
                    debugger;
                    reject();
                });
            }else{
                let files = self.resource.merge_index(action);
                let job = new Array();
   
                for(let file of files){
                    let task = self.load_html2(file);
                    job.push(task);
                }

                const result  = Promise.all(job);

                result.then(values =>{
                    let flag = false;
                    for(let value of values){
                        if(value){
                            flag = true;
                            self.response.status(200);
                            self.response.data(value);
                            break;
                        }
                    }
                    if(flag){
                        resolve();
                    }else{
                        self.response.status(404);
                        reject();
                    }
                });

                result.then(function(){

                });
            }
        });

        return promise;
    }

    assign_get(action) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let done = global.action.get[action];

            log(__filename, "assign_get", action);

            if(done){
                done(self.request, self.response, self.cookie, self.session, self.resource).then(function(){
                    resolve();
                }, function(){
                    reject();
                });
            }else{
                let name = self.resource.merge_action(action);
                let html = self.resource.merge_html(action);

                self.resource.exists(name).then(function(){
                    self.load_action(name).then(function(){

                    }, function(err){
                        throw err;
                    });
                }, function(){

                }).finally(function(){
                    self.resource.exists(html).then(function(){
                        self.load_html(html).then(function(data){
                            self.parse_type(action);
                            self.response.data(data);
                            resolve();
                        }, function(){
                            self.response.status(500);
                            reject(500);
                        });
                    }, function(){
                        self.response.status(404);
                        reject(404);
                    });
                });
            }
        });

        return promise;
    }

    assign_post(action) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            log(__filename, "assign_post", action);

            let done = global.action.post[action];

            if(done){
                done(self.request, self.response, self.cookie, self.session, self.resource).then(function(){
                    resolve();
                }, function(err){
                    reject();
                });
            }else{
                self.response.status(500);
                reject(500);
            }
        });
        
        return promise;
    }

    parse_type(action) {
        log(__filename, "parse_type", action);

        if(action.endsWith('.js')){
            this.response.set('Content-Type', 'application/javascript');
        }else if(action.endsWith('.css')){
            this.response.set('Content-Type', 'text/css');
        }
    }

    load_action(action) {
        log(__filename, "load_action", action);

        let self = this;
        let promise = new Promise(function(resolve, reject){
            let result = self.resource.load_action(action);

            if(result){
                if(resolve)resolve();
            }else{
                if(reject)reject();
            }
        });

        return promise;
    }

    load_html(file) {
        log(__filename, "load_html", file);
        return this.resource.load_file(file);
    }

    load_html2(file) {
        log(__filename, "load_html2", file);

        let self = this;
        let promise = new Promise(function(resolve, reject){
            self.resource.exists(file).then(function(){
                return self.resource.load_file(file);
            }, function(err){
                
            }).then(function(data){
                resolve(data);
            }, function(err){
                reject();
            });
        });

        return promise;
    }
}

module.exports = T200HttpsDispatcher;