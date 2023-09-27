class T200HttpResponse {
    constructor(res) {
        this.redirect = false;
        this.response = res;
    }

    SEND_200(){

    }

    SEND_404(){

    }

    SEND_500(msg){
        this.response.writeHead(500);
        this.response.end(msg);
    }
}

module.exports = T200HttpResponse;