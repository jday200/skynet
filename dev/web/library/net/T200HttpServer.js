const http = require('http');
const T200HttpSetup = require('./T200HttpSetup.js');
const T200HttpDispatcher = require('./T200HttpDispatcher.js');
const T200Database = require('../../library/db/T200Database.js');
const T200HomeDBSetup = require('../../project/store/T200HomeDBSetup.js');


class T200HttpServer {
    constructor() {
        global.setup = {};
        global.setup.http = new T200HttpSetup();
    }

    start(callback) {
        let HomeDBSetup = new T200HomeDBSetup();
        let database = new T200Database();

        database.setup = HomeDBSetup;

        database.build(function(){
            global.database = database;

            console.log('database build');
            let server  = http.createServer(function(req, res){
                let HttpDispatcher = new T200HttpDispatcher();
      
                HttpDispatcher.run(req, res);
            });

            server.listen(global.setup.http.port);
    
            console.log('server start');
            if(callback)callback();
        });

        
    }

}

module.exports = T200HttpServer;