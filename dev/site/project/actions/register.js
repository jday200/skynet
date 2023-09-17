const T200Person = require('../modules/person.js');
const T200HomePerson = require('../biz/T200HomePerson.js');

do_register(req, res) {
    let person = new T200Person();
	let HomePerson = new T200HomePerson();


    HomePerson.register(person);
};



global.request.post('/register', do_register);