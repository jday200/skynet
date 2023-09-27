class T200HttpSession {
    constructor(request, cookie) {
        this.request = request;
        this.cookie = cookie;
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