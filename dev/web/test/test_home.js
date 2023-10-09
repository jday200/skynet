const T200HomeServer = require('../project/T200HomeServer.js');

let HomeServer = new T200HomeServer();

HomeServer.start().then(function(){
    console.log('Home server start success');
}, function(err){
    console.log(err);
    console.log('Home server start failure');
});