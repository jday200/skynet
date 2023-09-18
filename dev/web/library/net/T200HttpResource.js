const fs = require('fs');
const path = require('path');

class T200HttpResource {
    constructor() {

    }

    exists(file, callback) {
        fs.access(file, fs.constants.F_OK, callback);
    }
}

module.exports = T200HttpResource;