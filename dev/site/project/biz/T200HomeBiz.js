const { error, log } = require('../../library/T200Lib.js');
const T200Error = require('../../library/T200Error.js');

const T200BizBase = require('../../library/biz/T200BizBase.js');
const T200HomeStore = require('../store/T200HomeStore.js');


class T200HomeBiz extends T200BizBase {    
    constructor() {
        super();
        this.store = new T200HomeStore();
    }

    verify_login(cookie, session) {
        let sid = cookie.get("sid");

        if(sid && 0 < sid._value){
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

    ///
    connect() {
        let self = this;
        return self.check().then(function(){
            return self.store.connect();
        }, function(){
            return error();
        });
    }

    disconnect() {
        let self = this;
        return self.check().then(function(){
            return self.store.disconnect();
        }, function(){
            return error();
        });
    }

    query(sql) {
        let self = this;
        return self.store.query(sql).then(function(data){
            return data;
        }, function(){
            return error();
        });
    }

    execute(sql) {
        let self = this;
        return self.store.execute(sql).then(function(result){
            return result;
        }, function(){
            return error();
        });
    }

    ///
    add(sql) {
        let self = this;
        let result = false;
        return self.check().then(function(){
            return self.store.connect().then(function(){
                return self.store.execute(sql).then(function(flag){
                    if(flag){
                        result = true;
                    }else{
                        result = false;
                    }
                }, function(){

                }).finally(function(){
                    return self.store.disconnect().then(function(){

                    }, function(){
                        result = false;
                        return error();
                    });
                });
            }, function(){
                return error();
            }).then(function(){
                if(result){
                    return result;
                }else{
                    return error();
                }
            }, function(){
                return error();
            });
        }, function(){
            return error();
        });
    }


    remove(sql) {
        let self = this;
        let result = false;
        return self.check().then(function(){
            return self.store.connect().then(function(){
                return self.store.execute(sql).then(function(flag){
                    if(flag){
                        result = true;
                    }else{
                        result = false;
                    }
                }, function(err){

                }).finally(function(){
                    return self.store.disconnect().then(function(){

                    }, function(){
                        result = false;
                        return error();
                    });
                });
            }, function(){
                return error();
            }).then(function(){
                if(result){
                    return result;
                }else{
                    return error();
                }
            }, function(){
                return error();
            });
        }, function(){
            return error();
        });
    }


    modify(sql) {
        let self = this;
        let result = false;
        return self.check().then(function(){
            return self.store.connect().then(function(){
                return self.store.execute(sql).then(function(flag){
                    if(flag){
                        result = true;
                    }else{
                        result = false;
                    }
                }, function(){

                }).finally(function(){
                    return self.store.disconnect().then(function(){

                    }, function(){
                        result = false;
                        return error();
                    });
                });
            }, function(){
                return error();
            }).then(function(){
                if(result){
                    return result;
                }else{
                    return error();
                }
            }, function(){
                return error();
            });
        }, function(){
            return error();
        });
    }

    
    count(sql) {
        let self = this;
        let result = false;
        let data;
        return self.check().then(function(){
            return self.store.connect().then(function(){
                return self.store.query(sql).then(function(value){
                    if(value){
                        data = value;
                        result = true;
                    }else{
                        result = false;
                    }
                }, function(){

                }).finally(function(){
                    return self.store.disconnect().then(function(){

                    }, function(){
                        result = false;
                        return error();
                    });
                });
            }, function(){
                return error();
            }).then(function(){
                if(result){
                    return data;
                }else{
                    return error();
                }
            }, function(){
                return error();
            });
        }, function(){
            return error();
        });
    }


    find(sql) {
        let self = this;
        let result = false;
        let data;
        return self.check().then(function(){
            return self.store.connect().then(function(){
                return self.store.query(sql).then(function(value){
                    if(value){
                        data = value;
                        result = true;
                    }else{
                        result = false;
                    }
                }, function(){

                }).finally(function(){
                    return self.store.disconnect().then(function(){

                    }, function(){
                        result = false;
                        return error();
                    });
                });
            }, function(){
                return error();
            }).then(function(){
                if(result){
                    return data;
                }else{
                    return error();
                }
            }, function(){
                return error();
            });
        }, function(){
            return error();
        });
    }


    search(sql) {
        let self = this;
        let result = false;
        let data;
        return self.check().then(function(){
            return self.store.connect().then(function(){
                return self.store.query(sql).then(function(value){
                    if(value){
                        data = value;
                        result = true;
                    }else{
                        result = false;
                    }
                }, function(){

                }).finally(function(){
                    return self.store.disconnect().then(function(){

                    }, function(){
                        result = false;
                        return error();
                    });
                });
            }, function(){
                return error();
            }).then(function(){
                if(result){
                    return data;
                }else{
                    return error();
                }
            }, function(){
                return error();
            });
        }, function(){
            return error();
        });
    }


    list(sql) {
        let self = this;
        let result = false;
        let data;
        return self.check().then(function(){
            return self.store.connect().then(function(){
                return self.store.query(sql).then(function(value){
                    if(value){
                        data = value;
                        result = true;
                    }else{
                        result = false;
                    }
                }, function(){

                }).finally(function(){
                    return self.store.disconnect().then(function(){

                    }, function(){
                        result = false;
                        return error();
                    });
                });
            }, function(){
                return error();
            });
        }, function(){
            return error();
        }).then(function(){
            if(result){
                return data;
            }else{
                return error();
            }
        }, function(){
            return error();
        });
    }


    load(sql) {
        let self = this;
        let result = false;
        let data;
        return self.check().then(function(){
            return self.store.connect().then(function(){
                return self.store.query(sql).then(function(value){
                    if(value){
                        data = value;
                        result = true;
                    }else{
                        result = false;
                    }
                }, function(){

                }).finally(function(){
                    return self.store.disconnect().then(function(){

                    }, function(){
                        result = false;
                        return error();
                    });
                });
            }, function(){
                return error();
            }).then(function(){
                if(result){
                    return data;
                }else{
                    return error();
                }
            }, function(){
                return error();
            });
        }, function(){
            return error();
        });
    }

}

module.exports = T200HomeBiz;