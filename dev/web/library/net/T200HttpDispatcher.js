const url = require('url');
const T200HttpRequest = require('./T200HttpRequest.js');
const T200HttpResponse = require('./T200HttpResponse.js');
const T200HttpResource = require('./T200HttpResource.js');

class T200HttpDispatcher {
    constructor() {

    }

    run(req, res) {
        let self = this;
        this.request = new T200HttpRequest(req, function(){
            console.log("run");
            self.response = new T200HttpResponse(res);
            self.resource = new T200HttpResource();

            let data = url.parse(req.url, true);
            let flag = "/";
            if(!data.path.endsWith('/')){
                flag = req.method;
            }
            //global.request.data = data;
            console.log(data);
            console.log(flag);
    
            switch(flag){
                case "/":
                    console.log('/');
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
        let result = global.action.post[action];

        console.log(result);
        if(result){
            try{
                let flag = result(this.request, this.response);
                if(flag){
                    this.response.SEND_200();
                }else{
                    this.response.SEND_500();
                }
            }catch(err){
                this.response.SEND_500();
            }            
        }else{
            this.response.SEND_404();
        }
    }
    

}

module.exports = T200HttpDispatcher;