const url = require('url');


class T200HttpDispatcher {
    constructor() {

    }

    run(req, res) {
        let request = new T200HttpRequest(req);
        let response = new T200HttpResponse(res);

        let data = new url(req.url);

        switch(data.method){

        }
    }

    assign_get() {

    }

    assign_post() {

    }
    

}

module.exports = T200HttpDispatcher;