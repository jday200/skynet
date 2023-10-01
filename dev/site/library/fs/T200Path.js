const path = require('path');

class T200Path {
    constructor() {

    }

    static merge_path(file) {
        return path.join(__dirname, file);
    }

    static merge_root(file) {
        return path.join(__dirname, "../../" + file);
    }
}

module.exports = T200Path;