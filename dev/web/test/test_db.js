const T200HttpDatabase = require('../library/db/T200Database.js');


let HttpDatabase = new T200HttpDatabase();

HttpDatabase.setup.database = "home";
HttpDatabase.setup.user = "home";
HttpDatabase.setup.password = "home123";

HttpDatabase.connect(function(err){
    if(err)throw err;
    console.log("db connected.");
    HttpDatabase.query("", function(err, data){
        if(err){
            console.log(err);
        }else{
            console.log(data);
        }
        HttpDatabase.disconnect(function(err){
            if(err)throw err;
            console.log("db disconnected.");
        });
    });
});