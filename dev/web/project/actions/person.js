const { error } = require('../../library/error.js');
const T200Path = require('../../library/fs/T200Path.js');
const T200EJS = require('../../library/T200EJS.js');

const T200Person = require('../models/T200Person.js');
const T200HomePerson = require('../biz/T200HomePerson.js');

function do_profile(request, response, cookie, session, resource) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        console.log('do_profile');

        let EJS = new T200EJS();
        let file = resource.merge_pages('person/profile.ejs');
        let real = T200Path.join_root(file);

        let data = {};

        data.name = session.get('name');
        let user = new T200Person();

        get_profile(user).then(function(profile){
            console.log('get_profile');
            data.profile = profile;
            return EJS.render_file(real, data);
        }, function(err){
            console.log('get_profile error');
            return error();
        }).then(function(data){
            console.log('render');
            resolve(data);
        }, function(err){
            console.log('render error');
            reject(err);
        });

    });

    return promise;
}


function get_profile(user) {
    let self = this;
    let promise = new Promise(function(resolve, reject){
        let HomePerson = new T200HomePerson();

        HomePerson.find(user).then(resolve, reject);
    });

    return promise;
}


module.exports = { do_profile : do_profile };