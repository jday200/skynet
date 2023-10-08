function error() {
    return new Promise(function(resolve, reject){
        reject();
    });
}

module.exports = { error : error };