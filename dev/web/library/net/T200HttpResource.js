const fs = require('fs');
const path = require('path');

class T200HttpResource {
    constructor() {

    }

    exists(file, callback) {
        fs.access(file, fs.constants.F_OK, callback);
    }

    merge_action(action) {

    }

    merge_html(action) {

    }

    load_action(action) {

    }

    load_html(html) {
        
    }
}

module.exports = T200HttpResource;