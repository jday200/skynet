const T200HttpResource = require('../library/net/T200HttpResource.js');

let HttpResource = new T200HttpResource();

let file = "T200Home.js";

HttpResource.exists(file, function(err){
    console.log(err? "not exists" : "exists");
});