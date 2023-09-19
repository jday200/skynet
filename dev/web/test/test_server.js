const T200HttpServer = require('../library/net/T200HttpServer.js');

let HttpServer = new T200HttpServer();

global.setup.http.port = 8888;
global.setup.http.home = "../../home";

HttpServer.start();