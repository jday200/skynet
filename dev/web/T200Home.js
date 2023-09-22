const T200HomeServer = require('./project/T200HomeServer.js');

let HomeServer = new T200HomeServer();

HomeServer.start(function(){
    console.log('success.');
});