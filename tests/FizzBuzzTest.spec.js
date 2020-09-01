const assert = require("chai").assert;
const FizzBuzz = require("../app/FizzBuzz.js");

describe("tests kata FizzBuzz", function() {
    before(function(){
        fizzbuzz = new FizzBuzz();
    })

    it("should return Fizz when multiple of 3 given", function() {
        assert.equal(fizzbuzz.calculate(3), 'Fizz')
    });

    it("should return Buzz when multiple of 5 given", function() {
        assert.equal(fizzbuzz.calculate(5), 'Buzz')
    });

    it("should return FizzBuzz when multiple of 3 and 5 given", function() {
        assert.equal(fizzbuzz.calculate(15), 'FizzBuzz')
    });

    it("should return the same number when not divisible by 3 nor 5", function() {
        assert.equal(fizzbuzz.calculate(7), 7)
    });

});

