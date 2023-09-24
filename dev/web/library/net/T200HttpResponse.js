class T200HttpResponse {
    constructor(res) {
        this.redirect = false;
        this.response = res;
    }

    SET_HEADER(key, value) {
        this.response.setHeader(key, value);
        this.redirect = true;
        this.url = value;
    }

    REDIRECT() {

    }

    SEND_200(data) {
        if(this.redirect){
            //this.response.setHeader('Location', '/index.html');
            console.log(this.response);
            this.response.writeHead(301, this.url);
            this.response.end();
        }else{
            this.response.writeHead(200);
            this.response.end(data);
        }
        
     }

    SEND_404(msg) {
        this.response.writeHead(404);
        this.response.end(msg);
    }

    SEND_500(msg) {
        this.response.writeHead(500);
        this.response.end(msg);
    }
}

module.exports = T200HttpResponse;