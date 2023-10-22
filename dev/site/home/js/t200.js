class T200 {
    constructor() {

    }

    static create() {
        return new T200();
    }

    all(name) {
        return document.getElementsByName(name);
    }

    element(name) {
        return document.getElementById(name);
    }

    get(url, data, success, failure) {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', url, true);
        xhr.send(data);
        xhr.addEventListener('load', function(){
            if(200 == xhr.status){
                success(xhr.response);
            }else{
                failure();
            }
        });
    }

    post(url, data, success, failure) {
        let xhr = new XMLHttpRequest();

        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(data);
        xhr.addEventListener('load', function(){
            //console.log(xhr.response);
            //alert(xhr.status);
            if(200 == xhr.status){
                let flag = JSON.parse(xhr.response);
                if('success' == flag.result){
                    console.log('success');
                    success(flag.data);
                }else{
                    failure();
                }
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

    set_cookie(name, value) {
        document.cookie = `${name}=${value}`;
    }
}

window.$ = T200.create();