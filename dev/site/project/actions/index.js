const T200Path = require('../../library/fs/T200Path.js');
const T200EJS = require('../../library/ejs/T200EJS.js');
const T200HttpResource = require('../../library/net/T200HttpResource.js');

let EJS = new T200EJS();
let file;

let resource = new T200HttpResource();

debugger;

file = resource.merge_pages("body.ejs");
let real = T200Path.merge_root(file);
let data = {name : 'user'};

console.log(real);

EJS.render_file(real, data).then(function(data){
    global.response.SEND_200(data);
}, function(){

});