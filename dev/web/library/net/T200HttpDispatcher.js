const url = require('url');
const T200HttpRequest = require('./T200HttpRequest.js');
const T200HttpResponse = require('./T200HttpResponse.js');
const T200HttpResource = require('./T200HttpResource.js');

class T200HttpDispatcher {
    constructor() {

    }

    run(req, res) {
        this.request = new T200HttpRequest(req);
        this.response = new T200HttpResponse(res);
        this.resource = new T200HttpResource();

        let data = url.parse(req.url, true);
        let flag = "/";
        if("/" != data.path){
            flag = req.method;
        }
        console.log(data);
        console.log(flag);

        switch(flag){
            case "/":
                console.log('/');
                break;
            case "GET":
                this.assign_get();
                break;
            case "POST":
                this.assign_post();
                break;
        }
    }

    assign_get(action) {
        let self = this;
        let name = HttpResource.merge_action(action);
        let html = HttpResource.merge_html(action);

        HttpResource.exists(name, function(err){
            HttpResource.load_action(name, function(){
                HttpResource.exists(html, function(err){
                    HttpResource.load_file(html, function(err){
                        self.response.SEND_200("");
                    });
                });
            });
        });
    }

    assign_post() {

    }
    

}

module.exports = T200HttpDispatcher;