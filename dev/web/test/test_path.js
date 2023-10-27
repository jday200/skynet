const { error, log, log_start, log_stop } = require('../library/lib.js');
const T200File = require('../library/fs/T200File.js');
const T200Path = require('../library/fs/T200Path.js');

log_start(__filename, "test path");

var name = "home";
var real = T200Path.join_root(name);

log(__filename, `test path ${name}`);
T200Path.isdir(real).then(function(){
    log(__filename, `${name} is directory`);
}, function(){
    log(__filename, `${name} is not directory`);
    return error();
}).then(function(){
    name = "home/demo.html";
    real = T200Path.join_root(name);
    log(__filename, `test path ${name}`);
    return T200Path.isdir(real);
}, function(){
    return error();
}).then(function(){
    log(__filename, `${name} is directory`);
    return error();
}, function(){
    log(__filename, `${name} is not directory`);
}).then(function(){
    log(__filename, "test path succsee");
}, function(){
    log(__filename, "test path failure");
});

log_stop(__filename, "test path");