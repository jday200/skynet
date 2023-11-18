const { error, log } = require('../../library/T200Lib.js');
const T200Error = require('../../library/T200Error.js');

const T200HomeBiz = require('./T200HomeBiz.js');

/*
first page prev 1 2 3 4 5 next page last 
*/


class T200HomePaging extends T200HomeBiz {
    constructor(request, cookie, session) {
        super();
        //
        this.request = request;
        this.cookie = cookie;
        this.session = session;
        //
        this._page_size = 5;
        this._paging_size = 10;
    }

    calculate(model, sql, page) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            self.count(sql).then(function(data){
                let value = data[0].total;
                let total = Number(value);
                let prev = page - 1;
                let next = page + 1;

                let paging = {};

                paging.first = 1;
                paging.last = Math.ceil(total / self._paging_size);
                if(0 == paging.last){
                    paging.last = 1;
                }

                paging.prev = prev < paging.first ? paging.first : prev;
                paging.next = next > paging.last ? paging.last : next;

                let head = Math.floor(page / self._page_size) * self._page_size;
                let tail = head + self._page_size;

                head = 0 == head ? 1 : head;
                paging.pages = new Array();

                for(let i = head;i <= tail;i++){
                    if(i > paging.last){
                        break;
                    }else{
                        paging.pages.push(i);
                    }
                }

                resolve(paging);
            }, function(){
                reject();
            });
        });

        return promise;
    }

    paging(model, count, sql) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let page = self.request.get("paging");

            self.calculate(model, count, page).then(function(paging){
                return self.list(sql).then(function(values){
                    let data = {};
                    data.paging = paging;
                    data.values = values;
                    resolve(data);
                }, function(err){
                    return error();
                });
            }, function(){
                reject();
            });
        });

        return promise;
    }


    paging1(model) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let page = self.request.get("paging");

            self.calculate(model, page).then(function(paging){
                return self.list(model.merge_paging(paging)).then(function(values){
                    let data = {};
                    data.paging = paging;
                    data.values = values;
                    resolve(data);
                }, function(err){
                    return error();
                });
            }, function(){
                reject();
            });
        });

        return promise;
    }


    fulltext(model, search) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            self.count(model.merge_search(search)).then(function(){
                self.paging(model).then(function(data){
                    resolve(data);
                }, function(){

                });
            }, function(){

            });
        });

        return promise;
    }

}

module.exports = T200HomePaging;