class T200HttpsResponse {
    constructor(res) {
        this.res = res;
    }

    SEND_200(msg) {
        this.res.writeHead(200);
        this.res.end(msg);
    }

    SEND_404(msg) {
        this.res.writeHead(404);
        this.res.end(msg);
    }

    SEND_500(msg) {
        this.res.writeHead(500);
        this.res.end(msg);
    }
}

module.exports = T200HttpsResponse;