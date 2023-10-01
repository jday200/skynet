class T200HttpSession {
    constructor(request) {
        this.request = request;
    }

    static clear(){
        global.session = {};
    }

    set(name, value){
        global.session[name] = value;
    }

    get(name){
        return global.session[name];
    }
}

module.exports = T200HttpSession;