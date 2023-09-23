const http = require('http');

function done() {
    console.log('done');
}

let server = http.createServer(function(req, res){
    req.on('data', function(data){
        console.log('data');
        this.data += data;
    });
    req.on('end', function(){
        console.log('end');
        done();
    });
});

server.listen(8888);
