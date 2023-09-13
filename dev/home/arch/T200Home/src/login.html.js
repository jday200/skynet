const HomeLogin = require('./login.js');

console.log(global.actions);

global.actions.post('/login', function(req, res){
    console.log('/login action');

    var home = new HomeLogin();

    home.login();

});

console.log(global.actions);