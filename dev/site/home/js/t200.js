class T200 {
    constructor() {

    }

    static create() {
        return new T200();
    }

    element(name) {
        return document.getElementById(name);
    }

    post(url, data, success, failure) {
        let xhr = new XMLHttpRequest();

        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(data);
        xhr.addEventListener('load', function(){
            //console.log(xhr.response);
            let flag = JSON.parse(xhr.response);
            if('success' == flag.result){
                console.log('success');
                success(flag.data);
            }else{
                failure();
            }
        });
    }

    datatostring(data) {
        return new URLSearchParams(data).toString();
    }

    cookie(name) {
        let self = this;
        self.cookies = {};
        document.cookie.split(';').forEach(item =>{
            let values = item.split('=');
            self.cookies[ values[0].trim() ] = (values[1] || '').trim();
        });

        return self.cookies[name];
    }
}

window.$ = T200.create();