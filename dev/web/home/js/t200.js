class T200 {
    constructor() {

    }

    static create() {
        return new T200();
    }

    element(name) {
        return document.getElementById(name);
    }

    post(url, data, success) {
        let xhr = new XMLHttpRequest();

        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(data);
        xhr.addEventListener('load', function(){
            console.log(xhr.response);
            let flag = JSON.parse(xhr.response);
            if('success' == flag.result){
                console.log('success');
                success();
            }
        });
    }

    datatostring(data) {
        return new URLSearchParams(data).toString();
    }
}

window.$ = T200.create();