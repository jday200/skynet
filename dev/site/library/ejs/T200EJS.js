const ejs = require('ejs');

class T200EJS {
    constructor() {

    }

    render() {

    }

    render_file(file, data) {
        let self = this;
        let promise = new Promise(function(resolve, reject){
            console.log(file);

            ejs.renderFile(file, data, function(err, result){
                console.log(err);
                console.log(result);

                if(resolve)resolve(result);
            });
        });

        return promise;
    }
}

module.exports = T200EJS;