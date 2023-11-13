const { do_index } = require('./index.js');
const { do_house_index } = require('./house/index.js');
const { do_job_index } = require('./job/index.js');
const { do_trading_index } = require('./trading/index.js');
const { do_exchange_index } = require('./exchange/index.js');
const { do_region_index, do_city_index } = require('./region/index.js');

global.action.use_get('/', do_index);
global.action.use_get('/house/index.html', do_house_index);
global.action.use_get('/job/index.html', do_job_index);
global.action.use_get('/trading/index.html', do_trading_index);
global.action.use_get('/exchange/index.html', do_exchange_index);

global.action.use_get('/region/region.html', do_region_index);
global.action.use_get('/region/city.html', do_city_index);

