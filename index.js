'use strict';

var moment = require('moment');

module.exports = function (time) {
    if(typeof time === 'number'){
        time = moment(time * 1000);
    }

    return Math.abs(moment().diff(time, 'seconds')) < 1;
};
