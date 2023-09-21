const T200Database = require('../../library/db/T200Database.js');
const T200HomeDBSetup = require('../store/T200HomeDBSetup.js');
const T200Person = require('../modules/T200Person.js');


class T200HomeDatabase extends T200Database {
    constructor() {
        super();
        this.setup = new T200HomeDBSetup();
    }

    init() {
        let self = this;
        this.build(function(){
            self.clear(function(err){
                self.create(function(err){
                    console.log('release');
                    self.release(function(){
                        console.log('close');
                    });
                });
            });
        });
    }

    clear(callback) {
        let self = this;
        let person = new T200Person();

        this.connect(function(err){
            if(err)throw err;
            let sql;

            sql = person.build_drop();
            self.execute(sql, function(err){
                console.log(err);
                if(err){
                    self.disconnect(function(err){
                        if(callback)callback();
                    });
                }else{
                    self.disconnect(function(err){
                        if(callback)callback();
                    });

                    /*
                    sql = "";
                    self.execute(sql, function(err){
                        if(err){
                            self.disconnect(function(err){

                            });
                        }else{
                            sql = "";
                            self.execute(sql, function(err){
                                if(err){
                                    self.disconnect(function(err){

                                    });
                                }else{
                                    self.disconnect(function(err){

                                    });
                                }
                            });
                        }
                    });
                    */
                }
            });
        });
    }

    create(callback) {
        let self = this;
        let person = new T200Person();

        this.connect(function(err){
            if(err)throw err;
            let sql;

            sql = person.build_create();
            self.execute(sql, function(err){
                console.log(err);
                if(err){
                    self.disconnect(function(err){
                        if(callback)callback();
                    });
                }else{
                    self.disconnect(function(err){
                        if(callback)callback();
                    });
                    /*
                    sql = "";
                    self.execute(sql, function(err){
                        if(err){
                            self.disconnect(function(err){

                            });
                        }else{
                            sql = "";
                            self.execute(sql, function(err){
                                if(err){
                                    self.disconnect(function(err){

                                    });
                                }else{
                                    self.disconnect(function(err){

                                    });
                                }
                            });
                        }
                    });
                    */
                }
            });
        });
    }
}


let HomeDatabase = new T200HomeDatabase();

HomeDatabase.init();