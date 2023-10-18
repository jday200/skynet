const { log, log_start, log_stop } = require('../library/lib.js');
const T200File = require('../library/fs/T200File.js');
const T200Path = require('../library/fs/T200Path.js');


log_start("test_file");

let file = T200Path.join_root("home/index.html");

T200File.exists(file).then(function(){
    log(__filename, `${file} exists`);
    return error();
}, function(){
    log(__filename, `${file} not exists`);

    file = T200Path.join_root("home/login.html");
    return  T200File.exists(file);
}).then(function(){
    log(__filename, `${file} exists`);
    return T200File.load(file);
}, function(){
    log(__filename, `${file} not exists`);
    return error();
}).then(function(data){
    log(__filename, `${file} load success`, data);
}, function(){
    log(__filename, `${file} load failure`);
});

log_stop("test_file");