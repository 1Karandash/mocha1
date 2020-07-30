const assert=require('chai').assert;
const sayHi=require('../app').sayHi;
const addNumbers=require('../app').addNumbers;
//const app=require('../app');

describe('app', function(){
    describe('sayHi()', function(){
        it('sayHi should return hi', function(){
            let result=sayHi();
            assert.equal(result, 'hi')
        });

        it('sayHi() should return a string', function(){
            let result=sayHi();
            assert.typeOf(result, 'string')
        });
    });
    
    describe('addNumbers()', function(){
        it('addNumbers() should be above five', function(){
        let result=addNumbers(5,3)
        assert.isAbove(result, 5)
        });

        it('addNumbers() should return a number', function(){
        let result = addNumbers(5,3)
        assert.typeOf(result, 'number')
        });
    });
});
    