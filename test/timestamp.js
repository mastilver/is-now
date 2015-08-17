'use strict';

require('should');
var sinon = require('sinon');

var isNow = require('../');
var moment = require('moment');

describe('isNow([timestamp])', function(){

    var clock;

    before(function(){
        clock = sinon.useFakeTimers()
    });

    after(function(){
        clock.restore(clock.restore());
    });



    describe('current time', function(){
        it('should return true', function(){
            var time = moment();

            isNow(time.unix()).should.be.ok();
        });
    });

    describe('two second before', function(){
        it('should return false', function(){
            var time = moment();
            time.subtract(5, 'seconds');

            isNow(time.unix()).should.not.be.ok();
        });
    });

    describe('two second after', function(){
        it('should return false', function(){
            var time = moment();
            time.add(5, 'seconds');

            isNow(time.unix()).should.not.be.ok();
        });
    });
});
