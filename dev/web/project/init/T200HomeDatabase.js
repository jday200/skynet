const T200Database = require('../../library/db/T200Database.js');
const T200HomeDBSetup = require('../store/T200HomeDBSetup.js');

class T200HomeDatabase extends T200Database {
    constructor() {
        super();
        this.setup = new T200HomeDBSetup();
    }

    init() {
        this.clear(function(err){
            create(function(err){

            });
        });
    }

    clear(callback) {
        let self = this;
        this.connect(function(err){
            if(err)throw err;
            let sql;

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
                }
            });
        });
    }

    create(callback) {
        let self = this;
        this.connect(function(err){
            if(err)throw err;
            let sql;

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
                }
            });
        });
    }
}


let HomeDatabase = new T200HomeDatabase();

HomeDatabase.init();