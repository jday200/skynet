const { error, log } = require('../../T200Lib.js');
const T200Error = require('../../T200Error.js');

const T200SearchBiz = require('./T200SearchBiz.js');


class T200VisitorBiz extends T200SearchBiz {
    constructor() {
        super();
    }

    register() {

    }

    login(user) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            if(self.check()){
                if(self.store.is_connected()){
                    return self.login_done(user);
                }else{
                    self.store.connect().then(function(){
                        return self.login_done(user);
                    }, function(err){
                        reject();
                    }).catch(function(err){
                        console.log(err);
                    });
                }
            }else{
                reject();
            }
        });

        return promise;
    }

    login_done(user) {
        let self = this;
        return self.store.query(user.merge_login()).then(function(data){
            if(data && 1 == data.lenght){
                return self.store.execute(user.merge_login_update());
            }else{
                return error();
            }            
        }, function(err){
            return error();
        });
    }
}

module.exports = T200VisitorBiz;