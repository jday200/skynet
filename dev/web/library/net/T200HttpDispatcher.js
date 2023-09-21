const url = require('url');
const T200HttpRequest = require('./T200HttpRequest.js');
const T200HttpResponse = require('./T200HttpResponse.js');
const T200HttpResource = require('./T200HttpResource.js');

class T200HttpDispatcher {
    constructor() {

    }

    run(req, res) {
        global.request = new T200HttpRequest(req);
        this.response = new T200HttpResponse(res);
        this.resource = new T200HttpResource();

        let data = url.parse(req.url, true);
        let flag = "/";
        if(!data.path.endsWith('/')){
            flag = req.method;
        }
        global.request.data = data;
        console.log(data);
        console.log(flag);

        switch(flag){
            case "/":
                console.log('/');
                this.assign_default(data.path);
                break;
            case "GET":
                this.assign_get(data.path);
                break;
            case "POST":
                this.assign_post(data.path);
                break;
        }
    }

    assign_default(action) {
        let self = this;
        let files = this.resource.merge_default(action);

        for(let id in files) {
            self.resource.exists(files[id], function(err){
                console.log(files[id]);
                if(err){

                }else{
                    self.resource.load_file(files[id], function(err, data){
                        if(err){
                            self.response.SEND_500();
                        }else{
                            self.response.SEND_200(data);
                        }
                        return;
                    });
                }
                
            });
        }
    }

    assign_get(action) {
        let self = this;
        let name = this.resource.merge_action(action);
        let html = this.resource.merge_html(action);

        self.resource.exists(name, function(err){
            if(err){
                self.resource.exists(html, function(err){
                    if(err){
                        self.response.SEND_404();
                    }else{
                        self.resource.load_file(html, function(err, data){
                            if(err){
                                self.response.SEND_500();
                            }else{
                                self.response.SEND_200(data);
                            }
                        });
                    }
                });
            }else{
                self.resource.load_action(name, function(err){
                    if(err){
                        self.SEND_500();
                    }else{
                        self.resource.exists(html, function(err){
                            if(err){
                                self.response.SEND_404();
                            }else{
                                self.resource.load_file(html, function(err, data){
                                    if(err){
                                        self.response.SEND_500();
                                    }else{
                                        self.response.SEND_200(data);
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }

    assign_post(action) {

    }
    

}

module.exports = T200HttpDispatcher;