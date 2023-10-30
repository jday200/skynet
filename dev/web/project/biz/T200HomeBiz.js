const { error, log } = require('../../library/lib.js');
const T200Error = require('../../library/T200Error.js');

const T200BizBase = require('../../library/biz/T200BizBase.js');
const T200HomeStore = require('../store/T200HomeStore.js');


class T200HomeBiz extends T200BizBase {    
    constructor() {
        super();
        this.store = new T200HomeStore();
    }

    load(sql) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            self.store.connect().then(function(){
                self.store.query(sql).then(function(data){
                    resolve(data);
                }, function(){
                    reject();
                }).finally(function(){
                    self.store.disconnect().then(function(){

                    }, function(){
                        reject();
                    });
                });
            }, function(){
                reject();
            });
        });

        return promise;
    }

    add(sql) {
        let self = this;
        return this.check().then(function(){
            return self.store.connect().then(function(){
                return self.store.execute(sql).then(function(){
                    debugger;
                    /*
                    return self.store.query().then(function(){

                    }, function(){

                    });
                    */

                }, function(){
                    debugger;
                }).finally(function(){
                    return self.store.disconnect().then(function(){

                    }, function(){

                    });
                });
            }, function(){

            });
        }, function(){

        });
    }

    remove() {

    }

    modify() {

    }

    find() {

    }

    search() {

    }

    list() {

    }

    verify_login(cookie, session) {
        let sid = cookie.get("sid");
        debugger;
        if(sid && 0 < sid){
            let user_id = session.get("userid");
            if(user_id && 0 < user_id){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }

}

module.exports = T200HomeBiz;