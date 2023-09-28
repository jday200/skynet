function error(){
    return new Promise(function(resolve, reject){
        if(reject)reject();
    });
}

module.exports = { error: error };