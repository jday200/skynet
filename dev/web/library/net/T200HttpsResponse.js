class T200HttpsResponse {
    constructor(res) {
        this.res = res;
        this.parameters = {};         
    }

    set(name, value) {
        //this.parameters[name] = value;
        //this.res.setHeader('Content-Type', 'text/plain;charset=utf-8');
        this.res.setHeader(name, value);
    }

    SEND_200(msg) {
        //this.res.writeHead(200, {'Content-Type':'text/plain;charset=utf-8'});
        console.log(this.parameters);
        let data = JSON.stringify(this.parameters);
        this.res.writeHead(200, data);
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