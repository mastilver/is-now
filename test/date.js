'use strict';

require('should');
var sinon = require('sinon');

var isNow = require('../');

describe('isNow([Date object])', function(){

    var clock;

    before(function(){
        clock = sinon.useFakeTimers()
    });

    after(function(){
        clock.restore(clock.restore());
    });



    describe('current time', function(){
        it('should return true', function(){
            var time = new Date();

            isNow(time).should.be.ok();
        });
    });

    describe('less than one second before', function(){
        it('should return true', function(){
            var time = new Date();
            time.setSeconds(time.getSeconds() - 0.9);

            isNow(time).should.be.ok();
        });
    });

    describe('less than one second after', function(){
        it('should return true', function(){
            var time = new Date();
            time.setSeconds(time.getSeconds() + 0.9);

            isNow(time).should.be.ok();
        });
    });

    describe('two second before', function(){
        it('should return false', function(){
            var time = new Date();
            time.setSeconds(time.getSeconds() - 2);

            isNow(time).should.not.be.ok();
        });
    });

    describe('two second after', function(){
        it('should return false', function(){
            var time = new Date();
            time.setSeconds(time.getSeconds() + 2);

            isNow(time).should.not.be.ok();
        });
    });
});
