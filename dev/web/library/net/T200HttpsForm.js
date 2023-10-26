const T200Error = require('../T200Error.js');
const { error, log, log_start, log_stop } = require('../lib.js');


class T200HttpsForm {
    constructor() {

    }

    static verify_equal(value1, value2) {
        if(value1 && value2 && (value1 == value2)){
            return true;
        }

        return false;
    }

    static verify_text(value) {
        if(value){
            return true;
        }

        return false;
    }

    static verify_email(value) {
        if(value){
            return true;
        }

        return false;
    }
    
}

module.exports = T200HttpsForm;