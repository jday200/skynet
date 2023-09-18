const T200HttpSetup = require('../library/net/T200HttpSetup.js');


class T200HomeSetup extends T200HttpSetup {
    constructor() {
        super();

        this.port = 8888;
        this.default = "index.html,index.htm";
    }
}

module.exports = T200HomeSetup;