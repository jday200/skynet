const path = require('path');

class T200Path {
    constructor() {

    }

    static join_root(file) {
        let name = "../../" + file;
        return path.join(__dirname, name);
    }
}

module.exports = T200Path;