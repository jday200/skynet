const url = require('url');

class T200HttpDispatcher {
    constructor() {

    }

    run(req, res) {
        var result = url.parse(req.url);
        var data;

        console.log(result);

        global.actions.done(req, res);
    }
}


module.exports = T200HttpDispatcher;