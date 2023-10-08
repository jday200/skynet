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
            self.resource = new T200HttpsResource();
            self.request = new T200HttpsRequest(req);

            self.request.load().then(function(){
                console.log('request load success');

                self.response = new T200HttpsResponse(res);
                self.cookie = new T200HttpsCookie(req, res);
                self.session = new T200HttpsSession();

                return self.dispense(req);
            }, function(){
                console.log('request load failure');
            }).then(function(){
                console.log('dispense success');
            }, function(err){
                console.log(err);
                console.log('dispense failure');
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

            debugger;
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
            let files = self.resource.merge_index(action);

            for(let id in files){
                self.resource.exists(files[id]).then(function(){
                    self.load_html().then(function(){

                    }, function(){

                    });
                }, function(){

                });
            }
        });

        return promise;
    }

    assign_get(action) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let done = global.action.get[action];

            console.log(done);

            if(done){
                done(self.request, self.response, self.cookie, self.session).then(function(){
                    resolve();
                }, function(){
                    reject();
                });
            }else{
                let name = self.resource.merge_action(action);
                let html = self.resource.merge_html(action);

                self.resource.exists(name),then(function(){
                    self.load_action(name).then(function(){

                    }, function(){

                    });
                }, function(){

                }).finally(function(){
                    self.load_html(html).then(function(){

                    }, function(){

                    });
                });

            }
        });

        return promise;
    }

    assign_post(action) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let done = global.action.post[action];

            console.log(done);

            if(done){
                done(self.request, self.response, self.cookie, self.session).then(function(){
                    resolve();
                }, function(){
                    reject();
                });
            }else{
                reject();
            }
        });

        return promise;
    }

    load_action() {

    }

    load_html() {

    }
}

module.exports = T200HttpsDispatcher;