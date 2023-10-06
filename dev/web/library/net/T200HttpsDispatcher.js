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
            }, function(){
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
        });

        return promise;
    }

    assign_get() {

    }

    assign_post() {
        
    }
}

module.exports = T200HttpsDispatcher;