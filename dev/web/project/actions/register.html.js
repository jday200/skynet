function do_register() {

}

//global.request.post['/register'] = do_register;
global.request.use_post('/register', do_register);