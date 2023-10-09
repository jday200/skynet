const {error} = require('../library/error.js');
const T200File = require('../library/fs/T200File.js');
const T200Path = require('../library/fs/T200Path.js');

//let file = "../../home/index.html";
let file = T200Path.join_root("home/index.html");

T200File.exists(file).then(function(){
    console.log(`${file} exists`);
    return error();
}, function(){
    console.log(`${file} not exists`);
    
    //file = "../../home/login.html";
    file = T200Path.join_root("home/login.html");
    return T200File.exists(file);
}).then(function(){
    console.log(`${file} exists`);
    return T200File.load(file);
}, function(){
    console.log(`${file} not exists`);
    return error();
}).then(function(data){
    console.log(data);
    console.log('success');
}, function(){
    console.log('failure');
});





