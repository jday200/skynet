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
        this._paging_size = 10;
    }

    paging(model) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            let page = self.request.get("paging");
            let offset = (page - 1) * self._paging_size;

            let pading = {};
    
            model._size = self._paging_size;
            model._offset = offset;

            pading.first = 1;
            pading.last = 1;
            pading.pages = [1, 2, 3, 4, 5];
    
            self.list(model.merge_select()).then(function(values){
                let data = {};
                data.paging = pading;
                data.values = values;
                resolve(data);
            }, function(err){
                reject();
            });
        });

        return promise;
    }

    fulltext(sql) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            self.search(sql).then(function(values){
                let data = {};
                let paging = {};

                paging.first = 1;
                paging.last = 1;
                paging.pages = [1, 2, 3, 4, 5];

                data.paging = paging;
                data.values = values;

                resolve(data);
            }, function(err){
                reject();
            });
        });

        return promise;
    }

}

module.exports = T200HomePaging;