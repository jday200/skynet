const T200HttpResource = require('./T200HttpResource.js')

class T200HttpRequest {
    constructor() {
        console.log('request reset');
        this.get_pool = {};
        this.post_pool = {};
    }

    done(req, res) {
        //console.log(req);

        if('GET' === req.method) {
            var result = this.get_pool[req.url];

            if(result){
                console.log(1);
            }else{
                console.log(2);

                var HttpResource = new T200HttpResource();

                try{
                    HttpResource.load_js(req.url, function(){

                    });

                    HttpResource.load(req.url, function(data){
                        res.writeHead(200);
                        res.end(data);
                    });
                }catch(err){
                    console.log(err);

                    res.writeHead(404);
                    res.end();
                }
            }
        }else if('POST' === req.method){
            var result = this.post_pool[req.url];

            console.log('POST');
            console.log(req.url);
            console.log(this.post_pool);
            console.log(global.actions);

            if(result){
                result(req,res);
                res.writeHead(200);
                res.end();
            }else{
                console.log(404);

                res.writeHead(404);
                res.end();
            }
        }else{
            console.log(3);
        }
    }

    get() {

    }

    post(url, callback) {
        var result = this.post_pool[url];

        if(result){
            console.log('reset');
        }else{
            console.log('set');
            this.post_pool[url] = callback;

            console.log(this.post_pool);
        }
    }

    delete() {
        
    }
}

module.exports = T200HttpRequest;