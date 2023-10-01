class T200HttpResponse {
    constructor(res) {
        this.redirect = false;
        this.response = res;
    }

    SEND_200(msg){
        this.response.writeHead(200);
        this.response.end(msg);
    }

    SEND_404(msg){
        this.response.writeHead(404);
        this.response.end(msg);
    }

    SEND_500(msg){
        this.response.writeHead(500);
        this.response.end(msg);
    }
}

module.exports = T200HttpResponse;