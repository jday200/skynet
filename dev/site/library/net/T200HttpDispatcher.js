const url = require('url');
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

        debugger;
        this.request = new T200HttpRequest(req);
        this.request.load(function(){
            self.response = new T200HttpResponse(res);
            self.cookie = new T200HttpCookie(req, res);
            self.session = new T200HttpSession(req);
            self.resource = new T200HttpResource();

            debugger;
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
                    self.assign_get(data.path);
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

        }else{
            this.response.SEND_404();
        }
    }

    assign_get(action) {
        let self = this;
        let name = this.resource.merge_action(action);
        let html = this.resource.merge_html(action);

        self.resource.exists(name, function(err){
            if(err){
                
            }else{
                self.load_action().then(function(){
                    self.response.SEND_200();
                }, function(){
                    self.response.SEND_500();
                });
            }

            self.load_html().then(function(){
                self.response.SEND_200();
            }, function(){
                self.response.SEND_500();
            });
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

    load_action() {

    }

    load_html() {

    }
}

module.exports = T200HttpDispatcher;