const T200Database = require('../library/db/T200Database.js');


let Database = new T200Database();

Database.setup.database = "home";
Database.setup.user = "home";
Database.setup.password = "home123";

Database.build(function(){
    Database.connect(function(err){
        if(err)throw err;
        console.log("db connected.");
        Database.query("select * from person", function(err, data){
            if(err){
                console.log(err);
            }else{
                console.log(data);
            }
            Database.disconnect(function(err){
                if(err)throw err;
                console.log("db disconnected.");
            });
        });
    });
});