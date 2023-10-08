function do_register(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(){
        let person = new T200Person();
        let HomePerson = new T200HomePerson();

        person.username = request.value('username');

        let pwd1 = request.value('password1');
        let pwd2 = request.value('password2');
        let email = request.value('email');

        if(T200HttpsForm.verify_equal(pwd1, pwd2)
            && T200HttpsForm.verify_text(person.username)
            && T200HttpsForm.verify_email(email)){

            person.password = pwd1;
            person.email = email;

            HomePerson.register(person).then(function(){
                resolve();
            }, function(err){
                reject(err);
            });

            }else{
                reject("do_register error");
            }
    });

    return promise;
}

global.action.use_post('/register', do_register);