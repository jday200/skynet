const { error, log } = require('../../T200Lib.js');
const T200Error = require('../../T200Error.js');


class T200BizBase {
    constructor() {

    }

    check() {
        if(undefined == this.store){
            
        }else{
            return true;
        }

        return false;
    }
}

module.exports = T200BizBase;