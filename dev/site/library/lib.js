function error(msg) {
    return new Promise(function(resolve, reject){
        reject(msg);
    });
}

function log_start(file) {
    console.log(`${file} start`);
}

function log_stop(file) {
    console.log(`${file} stop`);
}

function log(msg) {
    console.log(msg);
}

function log(file, msg, data) {
    console.log(`${file}: ${msg} => ${data}`);
}


module.exports = { error, log_start, log_stop, log };