const url = require('url');
const {error} = require('../error.js');
const T200HttpRequest = require('./T200HttpRequest.js');
const T200HttpResponse = require('./T200HttpResponse.js');
const T200HttpCookie = require('./T200HttpCookie.js');
const T200HttpSession = require('./T200HttpSession.js');
const T200HttpResource = require('./T200HttpResource.js');


class T200HttpDispatcher {
    constructor() {

    }

    run(req, res) {
        let self = this;

        this.request = new T200HttpRequest(req);
        this.request.load(function(){
            self.response = new T200HttpResponse(res);
            self.cookie = new T200HttpCookie(req, res);
            self.session = new T200HttpSession(req);
            self.resource = new T200HttpResource();

            global.response = self.response;

        
            let data = url.parse(req.url, true);
            let flag = "/";

            if(!data.path.endsWith('/')){
                flag = req.method;
            }

            switch(flag){
                case "/":
                    self.assign_default(data.path);
                    break;
                case "GET":
                    //self.assign_get(data.path);
                    self.a_get(data.path);
                    break;
                case "POST":
                    self.assign_post(data.path);
                    break;
            }

        });
    }

    assign_default(action) {
        let self = this;
        let files = this.resource.merge_default(action);
        let flag = false;
        let result = false;

        for(let id in files){
            self.resource.exists(files[id], function(err){
                if(err){

                }else{
                    self.load_html().then(function(){
                        flag = true;
                        result = true;
                    }, function(){
                        flag = true;
                    });
                }
            }).catch(function(){

            }).finally(function(){
                //if(flag)break;
            });

            if(flag)break;
        }

        if(flag){
            if(result){

            }else{
                this.response.SEND_500();
            }
        }else{
            this.response.SEND_404();
        }
    }

    a_get(action) {
        let self = this;
        let done = global.action.get[action];

        console.log(done);

        if(done) {
            done(this.request, this.response, this.cookie, this.session).then(function(){
                self.response.SEND_200();
            }, function(){
                self.response.SEND_500();
            });
        }else{
            self.assign_get(action);
        }
    }

    assign_get(action) {
        let self = this;
        let name = this.resource.merge_action(action);
        let html = this.resource.merge_html(action);

        debugger;
        self.resource.exists(name).then(function(){
            return self.load_action(name);
        }, function(){

        }).then(function(){
            console.log('load action success');
            return self.resource.exists(html);
        }, function(err){
            console.log('load action failure');
            console.log(err);
            self.response.SEND_500();
            return error();
        }).then(function(){
            return self.load_html(html);
        }, function(){
            self.response.SEND_404();
            return error();
        }).then(function(data){
            self.response.SEND_200(data);
        }, function(){
            self.response.SEND_500();
        });

    }

    assign_post(action) {
        let self = this;
        let done = global.action.post[action];

        console.log(done);

        if(done){
            done(this.request, this.response, this.cookie, this.session).then(function(){
                self.response.SEND_200();
            }, function(){
                self.response.SEND_500();
            });
        }else{
            self.response.SEND_404();
        }

    }

    load_action(action) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let result;

            result = self.resource.load_action(action);
            if(result){
                if(resolve)resolve();
            }else{
                if(reject)reject();
            }
        });

        return promise;
    }

    load_html(file) {
        return this.resource.load_file(file);
    }
}

module.exports = T200HttpDispatcher;