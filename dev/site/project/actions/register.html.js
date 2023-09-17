const T200Person = require('../modules/person.js');
const T200HomePerson = require('../biz/T200HomePerson.js');

function do_register(req, res) {
    console.log('do_register');

    try{
    let person = new T200Person();
	let HomePerson = new T200HomePerson();


    HomePerson.register(person);

    console.log('done.');
    }catch(err){
        console.log(err);
    }
};


global.request.post['/register'] = do_register;