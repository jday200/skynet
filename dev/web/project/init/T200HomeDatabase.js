const { error, log } = require('../../library/T200Lib.js');
const T200Error = require('../../library/T200Error.js');

const T200HomeDBSetup = require('../store/T200HomeDBSetup.js');
const T200Database = require('../../library/db/T200Database.js');

const T200HomeClear = require('./T200HomeClear.js');


class T200HomeDatabase extends T200Database {
    constructor() {
        super();
        this.setup = new T200HomeDBSetup();
    }

    init() {
        
    }
}

let HomeDatabase = new T200HomeDatabase();

HomeDatabase.init();
