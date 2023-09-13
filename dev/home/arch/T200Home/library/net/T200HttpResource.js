const fs = require('fs');
const path = require('path');

class T200HttpResource {
    constructor() {

    }

    load(url, callback) {
        var real;
        var dir;
        var data;

        dir = path.join('../../home', url);
        real = path.join(__dirname, dir);

        console.log(dir);
        console.log(real);

        data = fs.readFile(real, function(err, result) {
            if(err)throw err;

            callback(result);
            data = result;
            return result;
        });

        return data;
    }

    load_js(url, callback) {
        var real;
        var dir;
        var data;
        var name;
        
        name = url + '.js';
        dir = path.join('../../src', name);
        real = path.join(__dirname, dir);

        console.log(dir);
        console.log(real);

        try{
            var err;
            
            if(fs.existsSync(real)) {
                const js = require(real);
                js;
            }else{
                throw err;
            }
            
        }catch(err){
            console.log(err);
            throw err;
        }
               
    }
}

module.exports = T200HttpResource;