const { do_index } = require('./index.js');
const { do_profile } = require('./person.js');

global.action.use_get('/', do_index);
//
global.action.use_get('/person/profile', do_profile);