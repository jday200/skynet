const url = require('url');


class T200NodeHttpDispatcher {
    constructor() {

    }

    run(req, res) {
        console.log('running...');

        var result = url.parse(req.url);

        console.log(result);
    }

}

module.exports = T200NodeHttpDispatcher;