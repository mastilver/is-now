'use strict';

require('should');
var sinon = require('sinon');

var isNow = require('../');
var moment = require('moment');

describe('isNow([moment object])', function(){

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

            isNow(time).should.be.ok();
        });
    });

    describe('less than one second before', function(){
        it('should return true', function(){
            var time = moment();
            time.subtract(900, 'milliseconds');

            isNow(time).should.be.ok();
        });
    });

    describe('less than one second after', function(){
        it('should return true', function(){
            var time = moment();
            time.add(900, 'milliseconds');

            isNow(time).should.be.ok();
        });
    });

    describe('two second before', function(){
        it('should return false', function(){
            var time = moment();
            time.subtract(2, 'seconds');

            isNow(time).should.not.be.ok();
        });
    });

    describe('two second after', function(){
        it('should return false', function(){
            var time = moment();
            time.add(2, 'seconds');

            isNow(time).should.not.be.ok();
        });
    });
});
