const { error, log } = require('../lib.js');
const T200Error = require('../T200Error.js');

const T200BizBase = require('../,,/library/biz/T200BizBase.js');
const T200HomeStore = require('../store/T200HomeStore.js');


class T200HomeBiz extends T200BizBase {    
    constructor() {
        super();
        this.store = new T200HomeStore();
    }

    add() {
        let self = this;
        return this.check().then(function(){
            return self.store.connect().then(function(){
                return self.store.query().then(function(){
                    return self.store.query().then(function(){

                    }, function(){

                    });
                }, function(){

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

}

module.exports = T200HomeBiz;